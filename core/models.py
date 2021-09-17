from django.contrib.auth.models import AbstractUser
from django.db.models import EmailField


class MyUser(AbstractUser):
    email = EmailField(unique=True)
