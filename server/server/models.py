from django.db import models
from django.contrib.auth.models import User

class ChatRooms(models.Model):
    name = models.CharField(max_length=100)
    #owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='chatroom_owner')
    created_at = models.DateTimeField(auto_now_add=True)

class Promts(models.Model):
    chatroom = models.ForeignKey(ChatRooms, on_delete=models.CASCADE)
    #owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    promt = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

class Responses(models.Model):
    chatroom = models.ForeignKey(ChatRooms, on_delete=models.CASCADE)
    #promt = models.ForeignKey(Promts, on_delete=models.CASCADE)
    #owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    response = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
# Create your models here.
