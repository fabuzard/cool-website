from rest_framework import serializers
from .models import CoolYouthUser

class SignupSerializers(serializers.ModelSerializer):
    class Meta:
        model = CoolYouthUser
        fields = ('pengerja_id', 'nomor_telepon',)