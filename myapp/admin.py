from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(RoomCategory)
admin.site.register(Room)
admin.site.register(Cabinet)
admin.site.register(Faucet)