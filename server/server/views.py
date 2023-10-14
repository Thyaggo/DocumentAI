from django.shortcuts import render
from rest_framework import viewsets
from .models import ChatRooms, Promts, Responses
from .serializer import ChatRoomsSerializer, PromtsSerializer, ResponsesSerializer

class ChatRoomsView(viewsets.ModelViewSet):
    queryset = ChatRooms.objects.all()
    serializer_class = ChatRoomsSerializer

class PromtsView(viewsets.ModelViewSet):
    queryset = Promts.objects.all()
    serializer_class = PromtsSerializer

class ResponsesView(viewsets.ModelViewSet):
    queryset = Responses.objects.all()
    serializer_class = ResponsesSerializer


# Create your views here.
