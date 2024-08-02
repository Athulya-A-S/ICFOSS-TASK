from django.contrib import messages
from django.shortcuts import render,redirect
from django.contrib.auth.models import User,auth
from .models import *

def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = auth.authenticate(username=username, password=password)
        if user is not None:
            auth.login(request, user)
            return render(request, 'home1.html')
        else:
            messages.error(request, 'Invalid username or password.')
            return redirect('home')
    return render(request, 'login.html')

def register(request):
    if request.method=='POST':
        firstname = request.POST.get('fname')
        lastname = request.POST.get('lname')  
        username = request.POST.get('userid')
        email = request.POST.get('email')
        password = request.POST.get('pass')

        if User.objects.filter(username=username).exists() or User.objects.filter(email=email).exists():
            msg = {
                'msg':'username or email already exists',
            }
            return render(request, 'register.html',msg)
        user = User.objects.create_user(username=username, email=email, password=password)
        user.first_name = firstname
        user.last_name = lastname
        user.save()
        return render(request,'login.html')
    return render(request,'register.html')

def home(request):
    return render(request,'home.html')