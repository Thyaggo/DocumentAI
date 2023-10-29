from django.db import models
from django.conf import settings
from server.models import ChatRooms



class Files(models.Model):
    file = models.FileField()
    #user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    chatroom = models.ForeignKey(ChatRooms, on_delete=models.CASCADE)
    uploaded_at = models.DateTimeField(auto_now_add=True)
# Create your models here.
