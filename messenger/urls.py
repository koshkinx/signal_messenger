from django.urls import path
from .views import check_status, user_status_page

urlpatterns = [
    path('check_status/', check_status, name='check_status'),
    path('status/', user_status_page, name='status'),
    # path('status/', status_view, name='status'),
    # Другие URL-адреса вашего приложения
]
