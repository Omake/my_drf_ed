from django.db import models

from core.models import MyUser


class Project(models.Model):
    name = models.CharField(max_length=30)
    repo_url = models.CharField(max_length=250)
    users = models.ManyToManyField(MyUser)


class Todo(models.Model):
    todo_text = models.CharField(max_length=500)
    project_id = models.ForeignKey(Project, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
