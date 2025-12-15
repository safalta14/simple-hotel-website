from django.urls import path
from .import views

# app_name='app'

urlpatterns = [
path('',views.home,name='home'),
path('description/',views.descriptionpage,name='description'),
path('rooms/',views.roompage,name='rooms'),
path('reviews/',views.reviewspage,name='reviews'),
path('login/',views.loginpage,name="login_page"),
path('signup/',views.signupage,name="sign_up"),
path('logout/' ,views.logout,name='logout'),
path('Booking_process/',views.booking,name='booking'),
]