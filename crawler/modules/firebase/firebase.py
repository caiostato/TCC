import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import os
from dotenv import load_dotenv, find_dotenv

# load_dotenv(find_dotenv("../../../.env"))
# database_url = os.environ.get('DATABASE_URL')
database_url = "https://rising-mercury-327713-default-rtdb.firebaseio.com/"

cred = credentials.Certificate("crawler/modules/firebase/firebaseSDK.json")
firebase_admin.initialize_app(cred,{
        'databaseURL':database_url
})

ref = db.reference('Unidade')

def push_database(dict_data,dict_servicos,array_especializacoes):

        nome = dict_data.get('nome')
        
        for key,value in dict_data.items():
                if(key != None and value != None):
                        ref.child(nome).child(key).set(value)

        for key,value in dict_servicos.items():
                if(key != None and value != None):
                        ref.child(nome).child("servicos").child(key).set(value)
        serv_count = 1
        for each in array_especializacoes:
                if(each != None):
                        ref.child(nome).child('especializacoes').child(str(serv_count)).set(each)
                        serv_count = serv_count + 1

