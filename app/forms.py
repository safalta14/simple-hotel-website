
from django import forms
from .models import Booking
from django.utils.timezone import now,localtime,make_aware
import datetime

class BookingForm(forms.ModelForm):
    class Meta:
        model = Booking
        fields= '__all__'

    def clean(self):
        cleaned_data = super().clean()
        date_value = cleaned_data.get("date")
        time_value = cleaned_data.get("time")

        if date_value and time_value:
            # Combine date and time into a datetime object
            booking_datetime = datetime.datetime.combine(date_value, time_value)

            # Make it timezone-aware
            booking_datetime = make_aware(booking_datetime)

            current_datetime = now()  # Already timezone-aware

            if booking_datetime < current_datetime:
                 self.add_error('date', "Date cannot be in the past")
                 self.add_error('time', "Time cannot be in the past")

        # fields = ['name', 'contact_no', 'email', 'no_of_people', 'date', 'time']