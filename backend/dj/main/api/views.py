from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
from main.models import User, Workshop, Enrollment
from .serializer import UserSerializer, WorkshopSerializer, EnrollmentSerializer
from django_filters.rest_framework import DjangoFilterBackend

class UserListView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetailView(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class LearningCreditsUpdateView(UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class WorkshopListView(ListAPIView):
    queryset = Workshop.objects.all()
    serializer_class = WorkshopSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('category', 'host_user', 'ws_id', 'is_active')

class WorkshopDetailView(RetrieveAPIView):
    queryset = Workshop.objects.all()
    serializer_class = WorkshopSerializer

class WorkshopCreateView(CreateAPIView):
    queryset = Workshop.objects.all()
    serializer_class = WorkshopSerializer

class WorkshopUpdateView(UpdateAPIView):
    queryset = Workshop.objects.all()
    serializer_class = WorkshopSerializer

class EnrollmentListView(ListAPIView):
    queryset = Enrollment.objects.all()
    serializer_class = EnrollmentSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('ws_id', 'enrolled_user',)
class EnrollmentDetailView(RetrieveAPIView):
    queryset = Enrollment.objects.all()
    serializer_class = EnrollmentSerializer

class EnrollmentCreateView(CreateAPIView):
    queryset = Enrollment.objects.all()
    serializer_class = EnrollmentSerializer

class EnrollmentUpdateView(UpdateAPIView):
    queryset = Enrollment.objects.all()
    serializer_class = EnrollmentSerializer

class EnrollmentDestroyView(DestroyAPIView):
    queryset = Enrollment.objects.all()
    serializer_class = EnrollmentSerializer
