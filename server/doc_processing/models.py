from django.db import models
from django.contrib.auth.models import User
from server.models import ChatRooms


class Files(models.Model):
    file = models.FileField()
    chatroom = models.ForeignKey(ChatRooms, on_delete=models.CASCADE)
    uploaded_at = models.DateTimeField(auto_now_add=True)
# Create your models here.
