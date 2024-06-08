from django.shortcuts import render
from django.http import JsonResponse
from .models import UserStatus


def check_status(request):
    user_statuses = UserStatus.objects.all()
    status_dict = {
        status.user.username: status.online for status in user_statuses}
    return JsonResponse(status_dict)


def status_view(request):
    return render(request, 'status.html')  # используем шаблон status.html


def user_status_page(request):
    return render(request, 'messenger/status.html')
