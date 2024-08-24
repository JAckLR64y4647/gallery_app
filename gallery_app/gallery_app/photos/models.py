from urllib import request
from django.db import models
from django.contrib.auth.models import User

from photos.models import Category, Photo

from django.core.cache import cache

from django.contrib import admin
from .models import Photo, Category

@admin.register(Photo)
class PhotoAdmin(admin.ModelAdmin):
    list_display = ['id', 'image', 'description', 'category', 'uploaded_at']
    list_filter = ['category']
    search_fields = ['description']

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'user']
    search_fields = ['name', 'user__username']
