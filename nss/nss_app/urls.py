from django.urls import path, include

from . import views

urlpatterns = [
    path('questions/', views.QuestionList.as_view()),
    path('question/<int:pk>/', views.QuestionDetail.as_view()),
]
