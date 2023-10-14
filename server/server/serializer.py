from rest_framework import serializers
from .models import ChatRooms, Promts, Responses

class ChatRoomsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatRooms
        fields = '__all__'

class PromtsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Promts
        fields = '__all__'

class ResponsesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Responses
        fields = '__all__'