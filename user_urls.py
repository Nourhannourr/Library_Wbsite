

from django.urls import path
from . import views
from .views import bookDetailPage

urlpatterns = [
    path('signup', views.signupPage, name='signup_page'),
    path('', views.UserPage, name='user_page'),
    path('bookauthors/', views.bookauthorsPage, name='book_authors_page'),
    path('dashboard/', views.dashPage, name='dash_page'),
    path('profile/', views.userprofilePage, name='profile_page'),
    path('book/<int:pk>/', views.bookDetailPage, name='book_detail_page'),
    path('booklist/', views.booklistCategories, name='book_list_page'),
    path('filter-books/', views.filter_books, name='filter_books'),
]