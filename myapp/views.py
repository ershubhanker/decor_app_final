from django.shortcuts import render,redirect,HttpResponseRedirect
from .forms import UserLoginForm,SignupUser
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.models import User,Permission
from django.contrib.auth.decorators import login_required
from .models import *
from json import dumps
from django.http import JsonResponse
import ast
from django.core import serializers

# user Login page function
def Userlogin(request):
	if request.method == 'POST':
		loginForm = UserLoginForm(request.POST or None)
		if loginForm.is_valid():
			username = loginForm.cleaned_data.get('username')
			password = loginForm.cleaned_data.get('password')
			user = authenticate(username=username,password=password)
			if user.is_active:
				login(request,user)
				return redirect('/myapp/home')
	else:
		loginForm = UserLoginForm()
	return render(request,'login.html',{'loginForm':loginForm})

# user Signup page function
def signupform(request):
	if request.method == 'POST':
		UserRegister = SignupUser(request.POST or None)
		if UserRegister.is_valid():
			UserRegister.save()
			username = UserRegister.cleaned_data.get('username')
			password = UserRegister.cleaned_data.get('password')
			user = authenticate(username=username,password=password)
			return HttpResponseRedirect("/myapp/login")
	else:
		UserRegister = SignupUser()
	return render(request,'signup.html',{'UserRegister':UserRegister})


@login_required
def UserLogout(request):
	logout(request)
	return redirect('/myapp/login')


@login_required
def userprofile(request,pk=None):
	if pk:
		user = User.objects.get(pk=pk)
	else:
		user = request.user
	print(user)
	return render(request,'userprofile.html',{'user':user})


def Homepage(request):
	return render(request,'home.html')

def Aboutpage(request):
	return render(request,'about.html')

def Servicepage(request):
	return render(request,'services.html')

def Projectpage(request):
	return render(request,'projects.html')

def Contactpage(request):
	return render(request,'contact.html')

def Teampage(request):
	return render(request,'team.html')

def Faqpage(request):
	return render(request,'faq.html')

# sending 3D models to javascripts
# def sendmodels(request):
# 	val = Room.objects.values()
# 	newval = []

# 	for i in val:
# 		newval.append(i['upload'])
	
# 	response = {
#         'is_taken': newval[0]
#     }
# 	return JsonResponse(response, status=200)



# def kitchenmodel(request):
# 	val = list(Room.objects.values())
	
# 	return render(request,'kitchen.html')