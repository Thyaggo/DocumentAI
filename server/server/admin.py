from django.contrib import admin
from .models import ChatRooms, Promts, Responses

admin.site.register(ChatRooms)
admin.site.register(Promts)
admin.site.register(Responses)

# Register your models here.
