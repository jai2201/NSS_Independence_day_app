# Generated by Django 3.2.3 on 2021-08-13 21:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nss_app', '0003_question_question_desc'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='question_desc',
            field=models.TextField(),
        ),
    ]