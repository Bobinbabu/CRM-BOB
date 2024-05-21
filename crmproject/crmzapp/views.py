from django.shortcuts import render


def dash(request):
    return render(request, 'dash.html')
def dashoff(request):
    return render(request,'dash.html')

def ticket(request):
    return render(request, 'ticket.html')

def customer(request):
    return render(request, 'new_customer.html')

def leads(request):
    return render(request, 'leads.html')

def new_leads(request):
    return render(request, 'new_leads.html')