from django.shortcuts import render
from django.http import FileResponse
from .models import Files

def index(request):
    pdf = Files.objects.first()
    path = pdf.file.path
    return FileResponse(open(path, 'rb'))
# Create your views here.
