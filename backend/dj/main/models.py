from django.db import models
from django.contrib.auth.models import User

class MyUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    age = models.IntegerField(null=True)
    user_rating = models.FloatField(default=5.0)
    learning_credit = models.IntegerField(default=10)

    def __str__(self):
        return self.user.username
