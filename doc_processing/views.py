from rest_framework.viewsets import ModelViewSet
from .models import Files
from .serializer import FileSerializer

# Create your views here.

class FileView(ModelViewSet):
    queryset = Files.objects.all()
    serializer_class = FileSerializer

