#from datetime import datetime
from rest_framework import serializers


from rest_framework.authtoken.models import Token

from main.models import User, Workshop, Enrollment

class TokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Token
        fields = ('key', 'user')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class WorkshopSerializer(serializers.ModelSerializer):
    start_time_display = serializers.DateTimeField(source='start_date_time', read_only=True, format="%A %m-%d-%Y at %I:%M %p")
    end_time_display = serializers.DateTimeField(source='end_date_time', read_only=True, format="%A %m-%d-%Y at %I:%M %p")

    host_username = serializers.CharField(source='host_user.username', read_only=True)

    class Meta:
        model = Workshop
        fields = '__all__'


class EnrollmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enrollment
        fields = '__all__'
