
from django.shortcuts import render


# Create your views here.
def index_config(request):
   
    return render(request, 'index_config.html')