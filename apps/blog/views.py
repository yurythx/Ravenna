from django.shortcuts import render


# Create your views here.
def index_blog(request):
   
    return render(request, 'index_blog.html')