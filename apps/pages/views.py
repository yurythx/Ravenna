
from django.shortcuts import render


# Create your views here.
def index(request):
   
    return render(request, 'index.html')

def about(request):
   
    return render(request, 'about.html')

def blog_index(request):
   
    return render(request, 'blog_index.html')

def blog_details(request):
   
    return render(request, 'blog-details.html')