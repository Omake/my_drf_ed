from rest_framework import status
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from todo.models import Todo, Project
from todo.serializers import TodoSerializer, ProjectSerializer
from todo.pagination import ProjectLimitOffsetPagination, TodoLimitOffsetPagination
from todo.filters import ProjectFilter, TodoFilter


class TodoViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    pagination_class = TodoLimitOffsetPagination
    filterset_class = TodoFilter

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.is_active = False
        instance.save()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ProjectViewSet(ModelViewSet):
    permission_classes = [AllowAny]

    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    pagination_class = ProjectLimitOffsetPagination
    filterset_class = ProjectFilter
