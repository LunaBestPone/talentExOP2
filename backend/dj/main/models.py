from django.db import models

# temporary user entity set
class User(models.Model):
    # set user_name as primary key
    user_name = models.CharField(max_length=200, primary_key = True)
    password = models.CharField(max_length=200, default='')
    email = models.CharField(max_length=200, null=True)
    age = models.IntegerField(null=True)
    user_rating = models.FloatField(default=0.0)
    learning_credit = models.IntegerField(default=10)

    def __str__(self):
        return self.user_name
