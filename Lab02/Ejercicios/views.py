from django.shortcuts import render

# Create your views here.
def operaciones(request):
    return render(request,'operaciones.html')

def respuestaope(request):
    a = request.POST['n1']
    b = request.POST['n2']
    suma = int(a) + int(b)
    context = {
        'a' : a,
        'b' : b,
        'resultado' : suma
    }
    return render(request,'respuestaope.html',context)