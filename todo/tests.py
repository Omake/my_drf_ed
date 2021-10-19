from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, APIClient
from mixer.backend.django import mixer
from .views import ProjectViewSet
from .models import Todo
from core.models import MyUser


class TestProjectViewSet(TestCase):
    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/projects/')
        view = ProjectViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class TestToDoViewSet(TestCase):
    def test_put(self):
        MyUser.objects.create_superuser('admin', 'admin@admin.com', 'admin')
        client = APIClient()
        client.login(username='admin', password='admin')

        test_todo = mixer.blend(Todo)
        response = client.get(f'/api/todo/{test_todo.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        response = client.put(f'/api/todo/{test_todo.id}/', {'todo_text': 'YOLO'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        test_todo = Todo.objects.get(id=test_todo.id)
        self.assertEqual(test_todo.todo_text, 'YOLO')

        client.logout()


