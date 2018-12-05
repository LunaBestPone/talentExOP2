from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone

"""
User model
"""
class User(AbstractUser):
    age = models.IntegerField(null=True)
    user_rating = models.FloatField(default=5.0)
    learning_credit = models.IntegerField(default=10)

    def __str__(self):
        return self.username

"""
Workshop model
"""
class Workshop(models.Model):
    ws_id = models.AutoField(primary_key = True)
    ws_name = models.CharField(max_length = 200)
    host_user = models.ForeignKey(User, on_delete = models.PROTECT)
    min_cap = models.IntegerField(null = True)
    max_cap = models.IntegerField(null = True)
    is_active = models.BooleanField(default = True)
    description = models.TextField(null = True)
    start_date_time = models.DateTimeField(default = timezone.now)
    end_date_time = models.DateTimeField(default = timezone.now)
    street = models.TextField(null = True)
    city = models.TextField(null = True)
    state = models.TextField(null = True)
    zip = models.TextField(null = True)
    longitude = models.FloatField(default = 0.0);
    latitude = models.FloatField(default = 0.0);
    category = models.TextField(null = True)

"""
Enrollment model
"""
class Enrollment(models.Model):
    ws_id = models.ForeignKey(Workshop, on_delete = models.CASCADE)
    enrolled_user = models.ForeignKey(User, on_delete = models.CASCADE)
    enroll_date_time = models.DateTimeField(default = timezone.now)

"""
Wishlist model
"""
class Wishlist(models.Model):
    user = models.ForeignKey(User, on_delete=models.PROTECT)
    workshop = models.ForeignKey(Workshop, on_delete=models.PROTECT)
