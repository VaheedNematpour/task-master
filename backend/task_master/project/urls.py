from django.urls import path
from . import views


urlpatterns = [
    # projects
    path('projects/', views.project_list),
    path('projects/<int:id>/', views.project_detail),

    # tasks
    path('tasks/', views.task_list),
]

