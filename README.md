# A functional iteration 1 code base
Though with some minor known bugs which will be fixed in iteration 2
# Do not expect "clone then run"
Some external package for django is needed, install them with pip

These packages now include:
* djangorestframework
* markdown
* django-filter
* django-cors-headers
* django-allauth
* django-rest-auth
* other packages might be needed for the future, but that's all for now

considering using react goole map react API right now.
*react-google-location
*react-google-map

# NPM packages you need to install yourself
Make sure you are in frontend/gui/ directory (```ls``` then you'll see ```package.json```)
Then run following:
```
npm install
```


# Now one more thing...
open ```backend/dj/dj/settings.py``` and check ```DATABASE``` section for configs you need to set up a database on your local environment, we will use postgresql here.

If you don't have postgresql installed, install it. brew if osx, download the installer if windows. How one set up the DB cluster and local server of postgresql is quite different on different operating system, you'll have to figure it out yourself (Google is your best friend when encountering any problem in the project, team members as well).

Basically you need a operating cluster, get the server running and create the database and user as indicated in the ```settings.py``` file.

To setp up for WIN10 Users:
1.Install latest version for WIN-64 system, do NOT need to add extensions in StackBuilder (a APP come with POSTGRESQL).
2.Run PGADMIN4 in start up menu, a server page should pop out in 10 seconds. This will also run the local server.
3.Create an empty database namded "talentExOP2db".
4.You should be good to go!

After setting up the db, get in ```backend/dj```, run
```
python manage.py migrate
```
to update the database

# Yay, you're all set
***fixture loading now is still required***
to load fixture into the database for demo or testing purposes, run ```python manage.py loaddata main/fixture/<any json files you found in the folder>```

This will also set up a super user with name ```default``` and password ```506talentexchange```

fire up backend sever with
```
python manage.py runserver
```
then go to ```frontend/gui```, run
```
npm start
```
to get frontend running.

Happy hacking / exploring.
