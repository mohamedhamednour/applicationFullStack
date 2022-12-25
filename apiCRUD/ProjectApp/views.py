from django.shortcuts import render, redirect
from rest_framework.decorators import api_view

from django.contrib.auth import login as loginauth, logout as logoutsite,authenticate
from rest_framework.generics import GenericAPIView
from rest_framework import generics
from rest_framework import viewsets
from rest_framework.response import Response

from .api import Imagess
from .models import Images




class image(viewsets.ModelViewSet):

    queryset = Images.objects.all()
    serializer_class = Imagess
class updateshopin(generics.RetrieveUpdateAPIView):
    queryset = Images.objects.all()
    serializer_class = Imagess


@api_view(['GET'])
def getshopinbyid(request, ids):
    queryset = Images.objects.filter(id=ids)
    data = Imagess(queryset, many=True).data
    return Response(data)