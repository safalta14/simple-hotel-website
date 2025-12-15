from django.db import models
from django.conf import settings
from django.core.validators import EmailValidator
from django.utils.timezone import now

#    model for booking
class Booking(models.Model):
   name=models.CharField(max_length=50)
   contact_no=models.CharField(max_length=50)
   email=models.EmailField(validators=[EmailValidator(message="Enter a valid email")])
   no_of_people=models.IntegerField()
   date=models.DateField()
   time=models.TimeField()
#    advance_payment=models.IntegerField()

   def __str__(self):
        return f"{self.name} - {self.date}"

    
  



