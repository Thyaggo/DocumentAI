from rest_framework.response import Response
from rest_framework import viewsets, status
from rest_framework_simplejwt.authentication import JWTAuthentication
from .models import ChatRooms, Promts, Responses
from .serializer import ChatRoomsSerializer, PromtsSerializer, ResponsesSerializer

class ChatRoomsView(viewsets.ModelViewSet):
    queryset = ChatRooms.objects.all()
    serializer_class = ChatRoomsSerializer
    authentication_classes = [JWTAuthentication]

class PromtsView(viewsets.ModelViewSet):
    queryset = Promts.objects.all()
    serializer_class = PromtsSerializer
    authentication_classes = [JWTAuthentication]

    def list(self, request):
        # Obtener el chat_id de la solicitud GET
        chat_id = request.query_params.get('chatroom')

        if chat_id is not None:
            try:
                chat_id = int(chat_id)
            except ValueError:
                return Response({'error': 'chat_id debe ser un número entero válido'}, status=status.HTTP_400_BAD_REQUEST)

            messages = Promts.objects.filter(chatroom=chat_id)
        else:
            # Si no se proporciona el chat_id, simplemente obtén todos los mensajes
            messages = Promts.objects.all()

        serializer = PromtsSerializer(messages, many=True)
        return Response(serializer.data)


class ResponsesView(viewsets.ModelViewSet):
    queryset = Responses.objects.all()
    serializer_class = ResponsesSerializer
    authentication_classes = [JWTAuthentication]
    
    def list(self, request):
        # Obtener el chat_id de la solicitud GET
        chat_id = request.query_params.get('chatroom')

        if chat_id is not None:
            try:
                chat_id = int(chat_id)
            except ValueError:
                return Response({'error': 'chat_id debe ser un número entero válido'}, status=status.HTTP_400_BAD_REQUEST)

            messages = Responses.objects.filter(chatroom=chat_id)
        else:
            # Si no se proporciona el chat_id, simplemente obtén todos los mensajes
            messages = Responses.objects.all()

        serializer = ResponsesSerializer(messages, many=True)
        return Response(serializer.data)


# Create your views here.
