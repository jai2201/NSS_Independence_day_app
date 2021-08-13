from django.db import models
from djrichtextfield.models import RichTextField
# Create your models here.


class Question(models.Model):
    question_desc = models.TextField()
    ranking = models.IntegerField()

    def __str__(self):
        return str(self.ranking)
