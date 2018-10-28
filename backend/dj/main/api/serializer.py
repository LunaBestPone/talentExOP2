from rest_framework import serializers

from main.models import User, Workshop, Enrollment

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class WorkshopSerializer(serializers.ModelSerializer):
        model = Workshop
        fields = '__all__'

class EnrollmentSerializer(serializers.ModelSerializer):
        model = Enrollment
        fields = '__all__'
