from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class CoolYouthUser(models.Model):
    pengerja_id = models.OneToOneField(User, on_delete=models.CASCADE)
    nama_depan = models.CharField(max_length=255, blank=True, null=True)
    nama_belakang = models.CharField(max_length=255, blank=True, null=True)
    nomor_telepon = models.CharField(unique=True, max_length=255, blank=True)
    nama_cool = models.CharField(max_length=255, blank=True, null=True)
    tempat_lahir = models.CharField(max_length=255, blank=True, null=True)
    tanggal_lahir = models.DateField(blank=True, null=True)
    status_pekerjaan = models.CharField(max_length=255, blank=True, null=True)
    domisili = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.nama_depan