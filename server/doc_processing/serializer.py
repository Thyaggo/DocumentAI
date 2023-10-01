from rest_framework import serializers
from .models import Files

class FileSerializer(serializers.ModelSerializer):

    file_url = serializers.FileField(required = False)
    class Meta:
        model = Files
        fields = '__all__'