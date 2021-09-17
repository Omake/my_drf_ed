from rest_framework.viewsets import ModelViewSet

from core.models import MyUser
from core.serializers import MyUserSerializer


class MyUserViewSet(ModelViewSet):
    queryset = MyUser.objects.all()
    serializer_class = MyUserSerializer
