from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from .models import *


class SignupUser(UserCreationForm):
    first_name = forms.CharField(max_length=100, required=True)
    last_name = forms.CharField(max_length=100, required=True)
    email = forms.EmailField(max_length=250)
    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'password1', 'password2',)


class UserLoginForm(forms.Form):
    username = forms.CharField()
    password = forms.CharField(widget=forms.PasswordInput)

    def clean(self, *args, **kwargs):
        username = self.cleaned_data.get('username')
        password = self.cleaned_data.get('password')

        if username and password:
            user = authenticate(username=username, password=password)
            if not user:
                raise forms.ValidationError('This user does not exist')
            if not user.check_password(password):
                raise forms.ValidationError('Incorrect password')
            if not user.is_active:
                raise forms.ValidationError('This user is not active')
        return super(UserLoginForm, self).clean(*args, **kwargs)

class FloorUploadForm(forms.ModelForm):
    class Meta:
        model = Floor
        fields = ['texture_Floor',]

class BackSplashForm(forms.ModelForm):
    class Meta:
        model = Backsplash
        fields = ['back_splash',]
        
class CounterTopForm(forms.ModelForm):
    class Meta:
        model = Countertop
        fields = ['counter_top',]
        
class CabinetForm(forms.ModelForm):
    class Meta:
        model = Cabinet
        fields = ['cabinet']
        
class CabinetHandleForm(forms.ModelForm):
    class Meta:
        model = CabinetHandle
        fields = ['cabinethandle']

class SinkForm(forms.ModelForm):
    class Meta:
        model = Sink
        fields = ['sink']

class FaucetForm(forms.ModelForm):
    class Meta:
        model = Faucet
        fields = ['faucet']
        
class WallsForm(forms.ModelForm):
    class Meta:
        model = Walls
        fields = ['walls']
        
class DoorForm(forms.ModelForm):
    class Meta:
        model = Door
        fields = ['door']