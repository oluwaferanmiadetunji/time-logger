package routes

import (
	"server/controllers"

	"github.com/gin-gonic/gin"
)

type ProjectRouteController struct {
	projectController controllers.ProjectController
}

func NewProjectRouteController(projectController controllers.ProjectController) ProjectRouteController {
	return ProjectRouteController{projectController}
}

func (rc *ProjectRouteController) AuthRoute(rg *gin.RouterGroup) {
	router := rg.Group("/project")

	router.POST("/create", rc.projectController.CreateNewProject)
}
