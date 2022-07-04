package services

import "server/models"

type ProjectService interface {
	CreateNewProject(*models.CreateProjectInput) (*models.ProjectDBResponse, error)
}
