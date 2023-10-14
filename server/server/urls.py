from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'chatrooms', views.ChatRoomsView, basename='chatrooms')
router.register(r'promts', views.PromtsView, basename='promts')
router.register(r'responses', views.ResponsesView, basename='responses')

urlpatterns = [
    path('', include(router.urls)),
]

