# Generated by Django 4.1.2 on 2022-12-24 05:11

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("myapp", "0019_trimming"),
    ]

    operations = [
        migrations.CreateModel(
            name="WallTexture",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("texture", models.ImageField(blank=True, upload_to="img/floor")),
                (
                    "roomtype",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="myapp.roomtype"
                    ),
                ),
                (
                    "walluser",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
    ]
