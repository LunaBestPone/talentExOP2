from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone

class User(AbstractUser):
    age = models.IntegerField(null=True)
    user_rating = models.FloatField(default=5.0)
    learning_credit = models.IntegerField(default=10)

    def __str__(self):
        return self.username

class Workshop(models.Model):
    ws_id = models.AutoField(default = 1, primary_key = True)
    ws_name = models.CharField(max_length = 200)
    host_user = models.ForeignKey(User, on_delete = models.PROTECT)
    min_cap = models.IntegerField(null = True)
    max_cap = models.IntegerField(null = True)
    is_active = models.BooleanField(default = True)
    description = models.TextField(null = True)
    start_date_time = models.DateTimeField(default = timezone.now)
    end_date_time = models.DateTimeField(default = timezone.now)

class Enrollment(models.Model):
    ws_id = models.ForeignKey(Workshop, on_delete = models.CASCADE)
    enrolled_user = models.ForeignKey(User, on_delete = models.CASCADE)
    enroll_date_time = models.DateTimeField(default = timezone.now)
