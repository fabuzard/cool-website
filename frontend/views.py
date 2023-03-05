from django.shortcuts import render
from pathlib import Path
import os

BASE_DIR = Path(__file__).resolve().parent.parent

# Create your views here.
def index(request, *args, **kwargs):
    return render(request, (os.path.join(BASE_DIR, 'frontend/build/index.html')))