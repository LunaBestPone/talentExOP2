from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    age = models.IntegerField(null=True)
    user_rating = models.FloatField(default=5.0)
    learning_credit = models.IntegerField(default=10)

    def __str__(self):
        return self.username
