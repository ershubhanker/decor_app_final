# Generated by Django 4.1.2 on 2022-12-27 17:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("myapp", "0020_walltexture"),
    ]

    operations = [
        migrations.AlterField(
            model_name="walltexture",
            name="texture",
            field=models.ImageField(blank=True, upload_to="img/wall"),
        ),
    ]
