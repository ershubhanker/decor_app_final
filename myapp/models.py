from django.db import models
from django.contrib.auth.models import User


ROOM_CHOICES = (
    ("Kitchen", "Kitchen"),
    ("Bedroom", "Bedroom"),
    ("Bathroom", "Bathroom"),
    ("Hall", "Hall"),
)
  
# declaring a Room Model

class RoomCategory(models.Model):
      room_img = models.ImageField(blank=True,upload_to ='img/')
      RoomCategory = models.CharField(
        max_length = 20,
        choices = ROOM_CHOICES,
        default = 'Kitchen'
        )

      def __str__(self):
        return self.RoomCategory


class Room(models.Model):
  upload = models.FileField(upload_to ='models/')
  roomcategory = models.ForeignKey(RoomCategory, on_delete=models.CASCADE)
