from django.shortcuts import render ,redirect
from django.shortcuts import  HttpResponse
from django.contrib.auth import authenticate ,login 
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.contrib import messages
from.forms import BookingForm
from datetime import date,timedelta

# Create your views here.
def home(request):
    return render(request,"index.html")

def loginpage(request):
    if request.method =='POST':
        username=request.POST.get('username')
        password=request.POST.get('password')
        user=authenticate(request,username=username,password=password)
        print(username,password)
        if user is None:
            messages.error(request,"Invalid Credentials")
            return render(request,"login.html")
        else:
            login(request,user)
            next_url=request.GET.get('next')
            if next_url:
                return redirect(next_url)
            else:
             return redirect("home")
    return render(request,"login.html")

def signupage(request):
    if request.method=="POST":
      username=request.POST.get('username')
      password=request.POST.get('password')
      verifypass=request.POST.get('v_password')
      
      if verifypass != password:
         messages.error(request,"Incorrect password")
         return render(request,"signup.html")
      
      if User.objects.filter(username=username).exists():
          messages.error(request,"The username already exist !")
          return render(request,'signup.html')

      user=User.objects.create_user(username=username,password=password)
    #   User.save()
    
      print(username,password,verifypass)
    #   messages.success(request,"account creatred successfully")  
      return redirect("login_page")
    
    return render(request,'signup.html')

def logout(request):
     return redirect(request,'home.html')

def descriptionpage(request):
   return render(request,'description.html')

def roompage(request):
    return render(request,'rooms.html')

def reviewspage(request):
    return render(request,'reviews.html')

@login_required(login_url='login_page')
def booking(request):
    tomorrow = date.today() + timedelta(days=1)
    if request.method=='POST':
        form=BookingForm(request.POST)
        
        if form.is_valid():
            form.save()
            return redirect('home')
        
        else:
            print(form.errors) 
        
    else:
        form=BookingForm()

    return render(request,'booking.html',{
        'form':form,
        'tomorrow':tomorrow
        })
    

    # return render(request,'booking.html')

# def dates(request):
#     tomorrow=date.today()+timedelta(days=1)
#     context={'tomorrow':tomorrow}
#     return render(request,'booking.html',context)
