import json
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APISimpleTestCase, APITestCase
from mixer.backend.django import mixer
from django.contrib.auth.models import User
from .models import MyUser


class MyUserTest(APITestCase):
    def setUp(self):
        MyUser.objects.create_superuser('admin', 'admin@admin.com', 'admin')
        self.client.login(username='admin', password='admin')

    def test_get_list(self):
        response = self.client.get('/api/users/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.client.logout()

    def test_get_item(self):
        test_user = mixer.blend(MyUser)
        response = self.client.get(f'/api/users/{test_user.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.client.logout()
