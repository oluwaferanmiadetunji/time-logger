package services

import "server/models"

type UserService interface {
	FindUserById(string) (*models.DBResponse, error)
	FindUserByEmail(string) (*models.DBResponse, error)
	UpsertUser(string, *models.UpdateDBUser) (*models.DBResponse, error)
}
