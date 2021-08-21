from django.urls import path

from . import views

urlpatterns = [
    #localhost:8080/app
    path('', views.index, name='index'),
    #localhost:8080/app/sumar/numero1/numero2
    path('/sumar/<int:calculo_id>/<int:calculo2_id>', views.suma, name='sumar'),
    #localhost:8080/app/restar/numero1/numero2
    path('/restar/<int:calculo_id>/<int:calculo2_id>', views.resta, name='restar'),
    #localhost:8080/app/multiplicar/numero1/numero2
    path('/multiplicar/<int:calculo_id>/<int:calculo2_id>', views.multiplicar, name='multiplicar'),

]