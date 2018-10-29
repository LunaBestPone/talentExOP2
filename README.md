# A functioning option 2
It include simple user list view which can serve as example for following development
# Do not expect "clone then run"
Some external package for django is needed, install them with pip

These packages now include:
* djangorestframework
* markdown
* django-filter
* django-cors-headers
* django-allauth
* django-rest-auth
* psycopg2

# NPM packages you need to install yourself
Make sure you are in frontend/gui/ directory (```ls``` then you'll see ```package.json```)
Then run following:
```
npm install
npm install axios
npm install --save react-router-dom
npm install antd --save
```
# Now one more thing...
open ```backend/dj/dj/settings.py``` and check ```DATABASE``` section for configs you need to set up a database on your local environment, we will use postgresql here.

If you don't have postgresql installed, install it. brew if osx, download the installer if windows. How one set up the DB cluster and local server of postgresql is quite different on different operating system, you'll have to figure it out yourself (Google is your best friend when encountering any problem in the project, as team members as well).

After setting up the db, get in ```backend/dj```, run
```
python manage.py migrate
```
to update the database

# Yay, you're all set
Before starting the django server, load fixture into your database.

Make sure you are in ```backend/dj/```, run
```
python manage.py loaddata ./main/fixtures/*
```
then fire up backend sever with
```
python manage.py runserver
```
then go to ```frontend/gui```, run
```
npm start
```
to get frontend running.

Happy hacking.
