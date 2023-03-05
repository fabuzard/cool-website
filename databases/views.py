from django.contrib.auth.models import User
# from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.utils.decorators import method_decorator

from rest_framework import generics, permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import ( 
                        SignupSerializers,
                    )
from .models import (
                    CoolYouthUser,
                )

# Extra views logics
import string
import random

# def generate_unique_code():
#     length = 6

#     while True:
#         code = ''.join(random.choices(string.ascii_uppercase, k=length))
#         if UserSessions.objects.filter(code=code).count() == 0:
#             break

#     return code

# Create your views here.

@method_decorator(csrf_protect, name='dispatch')
class CheckAuthenticaedView(APIView):
    def get(self, request, format=None):
        try:
            isAuthenticated = User.is_authenticated()

            if isAuthenticated:
                return Response({'Success':'Is authenticated'})
            else:
                return Response({'Error':'Not authenticated'})
        except:
            return Response({'Error': 'Something went wrong when checking authentication status'})

@method_decorator(csrf_protect, name='dispatch')
class SignupViews(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        data = self.request.data
        print(data)
        username = data["username"]
        password = data["password"]
        re_password = data['re_password']
        print('Username received :', username)
        print('Password received :', password)
        print('Re_password received :', re_password)
        
        try:
            if password == re_password:
                print('Password verifying passed, checking user objects: filter=username')
                queryset = User.objects.filter(username=username)
                print(queryset)
                if queryset.exists():
                    return Response({'Bad request':'User already exists'}, status=status.HTTP_201_CREATED)
                else:
                    print('Checking passwords ... ')
                    if len(password) < 6:
                        print('Password length error')
                        return Response({'Error':'Password must be atleast 6 characters'}, status=status.HTTP_400_BAD_REQUEST)
                    else:
                        user = User.objects.create_user(username=username, password=password)
                        print('Creating user:', username)
                        user.save()
                        print('User', username + ',' , 'created successfully')

                        user = User.objects.get(id=user.id)
                        print('Retrieving', username+"'s", 'id from database | id:', user.id)
                        
                        user_profile = CoolYouthUser(
                                            pengerja_id = user,
                                            nama_depan = '',
                                            nama_belakang = '',
                                            nomor_telepon = '',
                                            nama_cool = '',
                                            tempat_lahir = '',
                                            tanggal_lahir = '',
                                            status_pekerjaan = '',
                                            domisili = '',
                                        )
                        print('Inserting data to "CoolYouthUser" database ...',
                              CoolYouthUser.objects.all()
                              )

                        user_profile.save()
                        print('Insert success')

                        return Response({'Success': 'User created successfully'})
            else:
                return Response({'Error':'Passwords do not match'}, status=status.HTTP_400_BAD_REQUEST)
        except:
            print('\nError occured while inserting data to database')
            print('Initializing deletion')
            queryset = User.objects.filter(username=username)
            print('initializing queryset:', queryset)
            if queryset.exists():
                user = User.objects.get(username=username)
                print('Deleting user', username)
                user.delete()
                print('Deleted user', username)
            return Response({'Error':'Something went wrong when registering account'})

@method_decorator(ensure_csrf_cookie, name='dispatch')
class getCSRFToken(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        return Response({'Success':'CSRF cookie set'})

@method_decorator(csrf_protect, name='dispatch')    
class LoginView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        data = self.request.data

        username = data['username']
        password = data['password']

        try:
            user = auth.authenticate(username=username, password=password)

            if user is not None:
                auth.login(request, user)
                return Response({'Success':'User authenticated', 'username': username})
            else:
                return Response({'Error':'Error authentication'})
        except:
            return Response({'Error':'Something went wrong when logging in'})
        
class LogoutView(APIView):
    def post(self, request, format=None):
        try:
            auth.logout(request)
            return Response({'Success':'Logout successful'})
        except:
            return Response({'Error':'Something went wrong when loggin out'})