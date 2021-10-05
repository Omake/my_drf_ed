from rest_framework.serializers import HyperlinkedModelSerializer

from todo.models import Todo, Project


class TodoSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Todo
        fields = ['todo_text', 'created_at', 'project_id']


class ProjectSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'name', 'repo_url']
