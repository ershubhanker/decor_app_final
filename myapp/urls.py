from django.urls import path
from . import views

app_name = 'myapp'

urlpatterns = [  
    path('signup/', views.signupform,name='signup'),
    path('login/', views.Userlogin,name='login'),
    path('profile/', views.userprofile,name='profile'),
    path('home/', views.Homepage,name='home'),
    path('logout/', views.UserLogout,name='logout'),
    path('about/', views.Aboutpage,name='about'),
    path('service/', views.Servicepage,name='service'),
    path('project/', views.Projectpage,name='project'),
    path('contact/', views.Contactpage,name='contact'),
    path('faq/', views.Faqpage,name='faq'),
    path('team/', views.Teampage,name='team'),
    path('render/', views.rendermodel,name='render'),
]