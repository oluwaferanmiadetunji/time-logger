package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type CreateProjectInput struct {
	Name      string             `json:"name" bson:"name" binding:"required"`
	Company   string             `json:"company" bson:"company" binding:"required"`
	UserId    primitive.ObjectID `json:"user_id" bson:"user_id" binding:"required"`
	CreatedAt time.Time          `json:"created_at" bson:"created_at"`
	UpdatedAt time.Time          `json:"updated_at" bson:"updated_at"`
}

type ProjectDBResponse struct {
	ID        primitive.ObjectID `json:"id" bson:"_id"`
	Name      string             `json:"name" bson:"name"`
	Company   string             `json:"company" bson:"company"`
	UserId    primitive.ObjectID `json:"user_id" bson:"user_id"`
	CreatedAt time.Time          `json:"created_at" bson:"created_at"`
	UpdatedAt time.Time          `json:"updated_at" bson:"updated_at"`
}

type ProjectResponse struct {
	ID        primitive.ObjectID `json:"id,omitempty" bson:"_id,omitempty"`
	Name      string             `json:"name,omitempty" bson:"name,omitempty"`
	Company   string             `json:"company,omitempty" bson:"company,omitempty"`
	UserId    primitive.ObjectID `json:"user_id" bson:"user_id"`
	CreatedAt time.Time          `json:"created_at" bson:"created_at"`
	UpdatedAt time.Time          `json:"updated_at" bson:"updated_at"`
}

type UpdateProjectDB struct {
	ID        primitive.ObjectID `json:"id,omitempty" bson:"_id,omitempty"`
	Name      string             `json:"name,omitempty" bson:"name,omitempty"`
	Company   string             `json:"company,omitempty" bson:"company,omitempty"`
	UserId    primitive.ObjectID `json:"user_id" bson:"user_id"`
	CreatedAt time.Time          `json:"created_at" bson:"created_at"`
	UpdatedAt time.Time          `json:"updated_at" bson:"updated_at"`
}
