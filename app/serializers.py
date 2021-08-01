from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    created_at =serializers.DateTimeField(format="%Y-%m-%d %H:%M")


    class Meta:
        model =Post
        fields ='__all__'