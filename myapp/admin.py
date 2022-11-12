from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(RoomCategory)
admin.site.register(Room)
admin.site.register(Walls)
admin.site.register(Floor)
admin.site.register(Backsplash)
admin.site.register(Cabinet)
admin.site.register(CabinetHandle)
admin.site.register(SinkFaucet)