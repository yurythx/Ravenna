

from django.urls import path 
from pages import views


urlpatterns = [

    path('', views.index, name='index'), 
    path('about/', views.about, name='about'), 
    path('blog_index/', views.blog_index, name='blog-index'), 
    path('blog_details/', views.blog_details, name='blog-details'), 
    
]


