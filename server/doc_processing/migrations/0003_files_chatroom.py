# Generated by Django 4.2.5 on 2023-10-13 22:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0002_remove_responses_promt'),
        ('doc_processing', '0002_alter_files_file'),
    ]

    operations = [
        migrations.AddField(
            model_name='files',
            name='chatroom',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='server.chatrooms'),
        ),
    ]
