from django.http import Http404
from django.http import response
from nss_app.models import Question
from django.shortcuts import render

# Create your views here.
from django.db.models.fields import GenericIPAddressField
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.core import serializers
from django.shortcuts import render
from . serializers import QuestionSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework import permissions


class QuestionList(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        try:
            all_questions = Question.objects.all()
            serializer = QuestionSerializer(
                all_questions, many=True)
            return Response(serializer.data)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class QuestionDetail(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, pk):
        try:
            question = Question.objects.get(id=pk)
            serializer = QuestionSerializer(
                question)
            return Response(serializer.data)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)
