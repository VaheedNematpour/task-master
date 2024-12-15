from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Project, Task
from .serializers import ProjectSerializer, TaskSerializer


@api_view()
def project_list(request):
    projects = Project.objects.all()
    serializer = ProjectSerializer(projects, many=True)

    return Response(serializer.data)


@api_view()
def task_list(request):
    tasks = Task.objects.select_related('project').all()
    serializer = TaskSerializer(tasks, many=True)

    return Response(serializer.data)
