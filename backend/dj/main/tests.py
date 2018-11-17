from django.test import TestCase
from .models import User
from .api.views import *

# Create your tests here.
class UserTestCase(TestCase):

    fixtures =  ['usertest.json']
    @classmethod
    def setUpTestData(cls):
        cls.fixtureUser = User.objects.get(username='default')

    def test_fields_retrieval(self):
        self.assertEqual(self.fixtureUser.email, 'default@default.com')
        self.assertEqual(self.fixtureUser.age, 9)
        self.assertEqual(self.fixtureUser.user_rating, 5.0)
        self.assertEqual(self.fixtureUser.learning_credit, 10)

    def test_user_detail(self):
        response =  self.client.get('/api/user/' + str(self.fixtureUser.id) + '/')
        self.assertEqual(response.data['email'], 'default@default.com')
        self.assertEqual(response.data['age'], 9)
        self.assertEqual(response.data['user_rating'], 5.0)
        self.assertEqual(response.data['learning_credit'], 10)
