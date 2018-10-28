from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User
# admin user name: default
# password: 506talentexchange

admin.site.register(User, UserAdmin)
