from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('signup', index),
    path('jadwal', index),
    path('renungan', index),
    path('agenda', index),
    path('biodata', index)
]
