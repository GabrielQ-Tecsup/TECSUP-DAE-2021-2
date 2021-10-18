from django.urls import path
from django.urls.resolvers import URLPattern
from . import views

app_name = 'tienda'

urlpatterns = [
    path('', views.index, name='index'),
    path('categoria/<int:producto_id>',views.producto,name='producto'),
    path('producto/<int:producto_id>/', views.producto, name='producto'),
    path('agregarCarrito/<int:producto_id>',views.agregarCarrito,name='agregarCarrito'),
    path('carrito',views.carrito,name='carrito'),
    path('eliminarProductoCarrito/<int:producto_id>',views.eliminarProductoCarrito,name="eliminarProductoCarrito"),
    path('limpiarCarrito',views.limpiarCarrito,name='limpiarCarrito')
]