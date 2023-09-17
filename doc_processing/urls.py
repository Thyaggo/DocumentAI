from django.urls import path, include
from rest_framework.routers import DefaultRouter
from DocumentAI import settings
from django.conf.urls.static import static
from . import views

router = DefaultRouter()
router.register(r'files', views.FileView, basename='files')
 
urlpatterns = [
    path('', include(router.urls)),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)