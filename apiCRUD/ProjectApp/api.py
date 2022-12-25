
from rest_framework import serializers
from .models import Images

class Imagess(serializers.ModelSerializer):

    class Meta:
        model = Images
        fields = '__all__'