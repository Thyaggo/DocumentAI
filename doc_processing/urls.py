from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'files', views.FileView, basename='files')
 
urlpatterns = [
    path('', include(router.urls)),
]