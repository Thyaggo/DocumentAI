from django.db import models

class Files(models.Model):
    file = models.FileField()
    uploaded_at = models.DateTimeField(auto_now_add=True)

# Create your models here.