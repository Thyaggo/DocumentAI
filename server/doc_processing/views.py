from rest_framework.viewsets import ModelViewSet
from rest_framework_simplejwt.authentication import JWTAuthentication
from .models import Files
from .serializer import FileSerializer

# Create your views here.

class FileView(ModelViewSet):
    queryset = Files.objects.all()
    serializer_class = FileSerializer
    authentication_classes = [JWTAuthentication]

