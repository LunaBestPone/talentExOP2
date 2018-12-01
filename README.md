This branch is for new development

# A functional iteration 2 code base
Though with some minor known bugs which will be fixed in iteration 3
# Do not expect "clone then run"
Some external package for django is needed, install them with pip

These packages now include:
* djangorestframework
* markdown
* psycopg2
* django-filter
* django-cors-headers
* django-allauth
* django-rest-auth
* django-filters
* react-google-map
* other packages might be needed for the future, but that's all for now

Google API is for recording Only. No need to put this key anywhere in code.

Google Map API key = AIzaSyBut1PTcKfPOO_dEAKXZf9YsSMHqauyTtI

# NPM packages you need to install yourself
Make sure you are in frontend/gui/ directory (```ls``` then you'll see ```package.json```)
Then run following:
```
npm install
```
# Instruction for Unit Testing

The NPM packages required to run unit testing.
```
npm install --save react-native
npm install --save enzyme-to-json
npm install --save enzyme
npm install --save enzyme-enzyme-adapter-react-16
```
After these packages are installed, it is necessary to change the module name mapper inside the createJestConfig.js
(can be found: node_modules/react-scripts/scripts/utils/createJestConfig.js)
On line 58, change "react-native-web" to "react-native"

When all of these are done, we can now run the test!
Type ```npm test``` to test the components.
Type ```./node_modules/jest/bin/jest.js --coverage``` for code coverage.

There is no extra packages you need to install for backend testing.

For testing, ```python manage.py test``` is enough.

For coverage, run ```coverage run --source='.' manage.py test main```, and ```coverage report```.

# Now one more thing...
open ```backend/dj/dj/settings.py``` and check ```DATABASE``` section for configs you need to set up a database on your local environment, we will use postgresql here.

If you don't have postgresql installed, install it. brew if osx, download the installer if windows. How one set up the DB cluster and local server of postgresql is quite different on different operating system, you'll have to figure it out yourself (Google is your best friend when encountering any problem in the project, team members as well).

Basically you need a operating cluster, get the server running and create the database and user as indicated in the ```settings.py``` file.

To setp up for WIN10 Users:
1.Install latest version for WIN-64 system, do NOT need to add extensions in StackBuilder (a APP come with POSTGRESQL).
2.Run PGADMIN4 in start up menu, a server page should pop out in 10 seconds. This will also run the local server.
3.Create an empty database namded "talentExOP2db".
4.You should be good to go!

* Remember to change following section regarding DATABASE in (your project root dir)/backend/dj/dj/settings.py

Given 
  database name = talentExOP2db
  user name = Yan
  password = 123

//start of section

```
DATABASES = {

    'default': {
    
        'ENGINE': 'django.db.backends.postgresql',
    
    'NAME': 'talentExOP2db',
    
    'USER': 'Yan',
    
    'PASSWORD': '123',
    
    'HOST': '127.0.0.1',
    
    'PORT': '5432',
    
    }
  }
  
```


You will set username and password when you install POSTGRES DATABASE for windows.

You have to create a database mannually.

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

# Additional Documents

1. Requirements and specification: https://docs.google.com/document/d/1eawekv5lYxWnHvkev0rSs_K8qZAWermdP2YQSLSXKZY/edit?usp=sharing

2. Design and planning: https://docs.google.com/document/d/1YYMlVryNmUAWxUkwHTzcaHF8LJkakZaZLMMBfmVcw74/edit?usp=sharing 
