from django.urls import path

from . import views

app_name = 'encuesta'

urlpatterns = [
    # /encuesta/
    path('', views.index, name='index'),
    # /encuesta/5/
    path('<int:pregunta_id>/', views.detalle, name='detalle'),
    # /encuesta/5/resultados/
    path('<int:pregunta_id>/resultados/', views.resultados, name='resultados'),
    # /encuesta/5/votos/
    path('<int:pregunta_id>/voto', views.votar, name='votar'),
]
