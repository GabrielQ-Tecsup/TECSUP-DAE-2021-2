from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def index(request):
    return HttpResponse("Estas en la vista de Calculos")

def suma(request,calculo_id, calculo2_id):
    
    Resultado=calculo_id+calculo2_id
    return HttpResponse("la suma de %s + %s es = %s." %(calculo_id, calculo2_id, Resultado))

def resta(request,calculo_id, calculo2_id):

    Resultado=calculo_id-calculo2_id
    return HttpResponse("la resta de %s - %s es = %s." %(calculo_id, calculo2_id, Resultado))

def multiplicar(request,calculo_id, calculo2_id):

    Resultado=calculo_id*calculo2_id
    return HttpResponse("la multiplicacion de %s x %s es = %s." %(calculo_id, calculo2_id, Resultado))
