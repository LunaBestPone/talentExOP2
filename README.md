# A functioning option 2 with Login/Sign up
The base index '/' now is blank, insert your component with BaseRouter
# Do not expect "clone then run"
Some external package for django is needed, install them with pip

These packages now include:
* djangorestframework
* markdown
* django-filter
* django-cors-headers

***Extra packages now needed for user authentification, please install!***
* django-allauth
* django-rest-auth
* other packages might be needed for the future, but that's all for now


# NPM packages you need to install yourself
Make sure you are in frontend/gui/ directory (```ls``` then you'll see ```package.json```)
Then run following:
```
npm install
npm install axios
npm install --save react-redux
npm install --save react-router-dom
npm install antd --save
```
***In fact, pacakge.json is an index for all the packages you need, ```npm install``` will automatically take care of all packages you need by looking into that***

***We do have extra packages installed for Login/Sign up funtionality, but there's no need to specify what they are now***


# Now one more thing...
open ```backend/dj/dj/settings.py``` and check ```DATABASE``` section for configs you need to set up a database on your local environment, we will use postgresql here.

If you don't have postgresql installed, install it. brew if osx, download the installer if windows. How one set up the DB cluster and local server of postgresql is quite different on different operating system, you'll have to figure it out yourself (Google is your best friend when encountering any problem in the project, as team members as well).

After setting up the db, get in ```backend/dj```, run
```
python manage.py migrate
```
to update the database

***AND MOST IMPORTANTLY: Since we resigned User model in a way that the older database you've set up wouldn't handle the new one, drop the previous database and start a new one just as the last time (just think about changing to a clean data container)***

# Yay, you're all set
***fixture loading now is not required***

fire up backend sever with
```
python manage.py runserver
```
then go to ```frontend/gui```, run
```
npm start
```
to get frontend running.

Happy hacking.
