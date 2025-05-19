from django.shortcuts import render
from django.http import HttpResponse
from .models import Book
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
# Create your views here.

def AdminPage(request):
   return render(request,'pages/Admin.html')

def booklistPage(request):
    return render(request, 'pages/book_list.html') 

def admin_booklistPage(request):
    return render(request, 'pages/book_list.html') 

def bookformPage(request):
    return render(request, 'pages/book_form.html') 

def bookauthorsPage(request):
    return render(request, 'pages/bookauthors.html') 

def admin_bookauthorsPage(request):
    return render(request, 'pages/bookauthors.html')

def signupPage(request):
    return render(request,'pages/signup.html') 

def dashPage(request):
    return render(request,'pages/dash.html') 

def admin_dashPage(request):
    return render(request,'pages/dash.html') 

def userprofilePage(request):
    return render(request,'pages/userprofile.html')

def admin_userprofilePage(request):
    return render(request,'pages/userprofile.html') 

def UserPage(request):
   return render(request,'pages/indexx.html')

def bookDetailPage(request, pk):
    book = get_object_or_404(Book, pk=pk)
    return render(request, 'pages/book_detail.html', {'book': book})


def booklistCategories(request):
    fiction_books = Book.objects.filter(category__iexact='Fiction')
    nonfiction_books = Book.objects.filter(category__iexact='Non-Fiction')
    mystery_books = Book.objects.filter(category__iexact='Mystery')
    scifi_books = Book.objects.filter(category__iexact='Sci-Fi')
    romance_books = Book.objects.filter(category__iexact='Romance')
    historical_books = Book.objects.filter(category__iexact='Historical')
    horror_books = Book.objects.filter(category__iexact='Horror')
    poetry_books = Book.objects.filter(category__iexact='Poetry')
    psychology_books = Book.objects.filter(category__iexact='Psychology')
    religion_books = Book.objects.filter(category__iexact='Religion')

    return render(request, 'pages/book_list.html', {
        'fiction_books': fiction_books,
        'nonfiction_books': nonfiction_books,
        'mystery_books': mystery_books,
        'scifi_books': scifi_books,
        'romance_books': romance_books,
        'historical_books': historical_books,
        'horror_books': horror_books,
        'poetry_books': poetry_books,
        'psychology_books': psychology_books,
        'religion_books': religion_books,
    })



def filter_books(request):
    title = request.GET.get('title', '').lower()
    author = request.GET.get('author', '').lower()
    category = request.GET.get('category', '').lower()

    books = Book.objects.all()

    if title:
        books = books.filter(title__icontains=title)
    if author:
        books = books.filter(author__icontains=author)
    if category :
        books = books.filter(category__iexact=category)

    data = []
    for book in books:
        data.append({
            'id': book.id,
            'title': book.title,
            'author': book.author,
            'category': book.category,
        })
    return JsonResponse({'books': data})