from django.shortcuts import render
from pathlib import Path
import os

# Create your views here.

BASE_DIR = Path(__file__).resolve().parent.parent

def index(request):
    return render(request, (os.path.join(BASE_DIR, 'cool_admin/build/index.html')))