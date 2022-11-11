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
  room_img = models.ImageField(blank=True,upload_to ='img/')

class MultiRooms(models.Model):
    Room_model = models.FileField(upload_to='img/models/',blank=True)

class RoomType(models.Model):
    first_name = models.CharField(max_length=30,blank=True)
    multiroom = models.ForeignKey(MultiRooms, on_delete=models.CASCADE,null=True, blank=True)
    
    def __str__(self):
        return "%s" % (self.first_name)

class Floor(models.Model):
    texture_Floor = models.ImageField(blank=True,upload_to ='img/floor')
    roomtype = models.ForeignKey(RoomType, on_delete=models.CASCADE)
    
    def __str__(self):
        return "%s" % (self.roomtype)
      
class Backsplash(models.Model):
    back_splash = models.ImageField(blank=True,upload_to ='img/backsplash')
    roomtype = models.ForeignKey(RoomType, on_delete=models.CASCADE)

    def __str__(self):
        return "%s" % (self.roomtype)
      
class Cabinet(models.Model):
    cabinet = models.CharField(blank=True, max_length=10)
    roomtype = models.ForeignKey(RoomType, on_delete=models.CASCADE)
    
    def __str__(self):
        return "%s" % (self.roomtype)

class CabinetHandle(models.Model):
    cabinethandle = models.CharField(blank=True, max_length=10)
    roomtype = models.ForeignKey(RoomType, on_delete=models.CASCADE)
    
    def __str__(self):
        return "%s" % (self.roomtype)
  
class SinkFaucet(models.Model):
    sinkfaucet = models.CharField(blank=True, max_length=10)
    roomtype = models.ForeignKey(RoomType, on_delete=models.CASCADE)
    
    def __str__(self):
        return "%s" % (self.roomtype)

class Walls(models.Model):
    walls = models.CharField(blank=True, max_length=10)
    roomtype = models.ForeignKey(RoomType, on_delete=models.CASCADE)
    
    def __str__(self):
        return "%s" % (self.roomtype)