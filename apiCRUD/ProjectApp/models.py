from django.db import models

# Create your models here.
from django.db import models

# Create your models here.






class Images(models.Model):
    name = models.CharField(max_length=50, unique=True)
    description = models.TextField(max_length=2000)
    range = models.TextField(max_length=2000)


    def __str__(self):
        return self.name
