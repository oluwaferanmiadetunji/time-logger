package services

import (
	"context"
	"errors"
	"server/models"
	"strings"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type ProjectServiceImpl struct {
	collection *mongo.Collection
	ctx        context.Context
}

func NewProjectService(collection *mongo.Collection, ctx context.Context) ProjectService {
	return &ProjectServiceImpl{collection, ctx}
}

func (uc *ProjectServiceImpl) CreateNewProject(project *models.CreateProjectInput) (*models.ProjectDBResponse, error) {
	project.CreatedAt = time.Now()
	project.UpdatedAt = project.CreatedAt
	project.Company = strings.ToLower(project.Company)

	res, err := uc.collection.InsertOne(uc.ctx, &project)

	if err != nil {
		if er, ok := err.(mongo.WriteException); ok && er.WriteErrors[0].Code == 11000 {
			return nil, errors.New("Project already exists")
		}
		return nil, err
	}

	// Create a unique index for the Name field
	opt := options.Index()
	opt.SetUnique(true)
	index := mongo.IndexModel{Keys: bson.M{"Name": 1}, Options: opt}

	if _, err := uc.collection.Indexes().CreateOne(uc.ctx, index); err != nil {
		return nil, errors.New("could not create index for Name")
	}

	var newProject *models.ProjectDBResponse
	query := bson.M{"_id": res.InsertedID}

	err = uc.collection.FindOne(uc.ctx, query).Decode(&newProject)
	if err != nil {
		return nil, err
	}

	return newProject, nil
}
