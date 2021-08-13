from django.contrib import admin

from . import models
# Register your models here.


@admin.register(models.Question)
class Question(admin.ModelAdmin):
    list_display = ['question_desc', 'ranking']
