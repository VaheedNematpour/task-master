from django.contrib import admin
from .models import Project, Task


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['id', 'title']
    list_per_page = 10


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ['id', 'title']
    list_filter = ['project', 'completed']
    list_per_page = 10
    search_fields = ['title__startswith']
