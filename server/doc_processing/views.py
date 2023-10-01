from rest_framework.viewsets import ModelViewSet
from rest_framework.parsers import MultiPartParser, FormParser
from .models import Files
from .serializer import FileSerializer

# Create your views here.

class FileView(ModelViewSet):
    queryset = Files.objects.all()
    serializer_class = FileSerializer
    parser_classes = (MultiPartParser, FormParser)

    def perform_create(self, serializer):
        serializer.save()

