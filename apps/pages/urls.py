

from django.urls import path 
from pages import views


urlpatterns = [

    path('', views.index, name='index'), 
    path('about/', views.about, name='about'), 
    path('blog-index/', views.blog_index, name='blog-index'), 
    path('blog-details/', views.blog_details, name='blog-details'), 
    path('mangas/', views.mangas, name='mangas'),
    path('mangas-details/', views.mangas_details, name='mangas-details'),
    
]


