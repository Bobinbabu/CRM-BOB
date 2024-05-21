from django.urls import path
from.import views


urlpatterns = [
    path('', views.dash),
    path('dash', views.dashoff),
    path('tick', views.ticket),
    path('cust', views.customer),
    path('lead', views.leads),
    path('newlead', views.new_leads)
]