from rest_framework.serializers import HyperlinkedModelSerializer

from todo.models import Todo, Project


class TodoSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'


class ProjectSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
