package controllers

import (
	"net/http"

	"server/models"
	"server/services"

	"github.com/gin-gonic/gin"
)

type ProjectController struct {
	projectService services.ProjectService
}

func NewProjectController(projectService services.ProjectService) ProjectController {
	return ProjectController{projectService}
}

// SignUp User
func (ac *ProjectController) CreateNewProject(ctx *gin.Context) {
	var project *models.CreateProjectInput

	if err := ctx.ShouldBindJSON(&project); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"status": "fail", "message": err.Error()})
		return
	}

	newProject, err := ac.projectService.CreateNewProject(project)

	if err != nil {
		ctx.JSON(http.StatusBadGateway, gin.H{"status": "error", "message": err.Error()})
		return
	}

	ctx.JSON(http.StatusCreated, gin.H{"status": "success", "data": gin.H{"project": newProject}})
}
