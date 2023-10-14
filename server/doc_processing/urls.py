from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.conf.urls.static import static
from django.conf import settings
from . import views

router = DefaultRouter()
router.register(r'files', views.FileView, basename='files')
 
urlpatterns = [
    path('', include(router.urls)),
]