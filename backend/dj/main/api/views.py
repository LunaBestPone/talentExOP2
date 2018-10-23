from rest_framework.generics import ListAPIView, RetrieveAPIView

from main.models import User
from .serializer import UserSerializer

class UserListView(ListAPIView):
        queryset = User.objects.all()
        serializer_class = UserSerializer


class UserDetailView(RetrieveAPIView):
        queryset = User.objects.all()
        serializer_class = UserSerializer
        
