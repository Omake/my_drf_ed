from rest_framework.serializers import HyperlinkedModelSerializer

from core.models import MyUser


class MyUserSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = MyUser
        fields = ['username', 'first_name', 'last_name', 'email']
