from django.contrib import admin
from .models import Booking

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ['name', 'contact_no', 'email', 'date', 'time', 'no_of_people']
    list_filter = ['date']
    search_fields = ['name', 'email']