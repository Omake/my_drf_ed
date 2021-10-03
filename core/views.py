from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin, UpdateModelMixin

from core.models import MyUser
from core.serializers import MyUserSerializer


class MyUserViewSet(GenericViewSet, ListModelMixin, RetrieveModelMixin, UpdateModelMixin):
    queryset = MyUser.objects.all()
    serializer_class = MyUserSerializer
