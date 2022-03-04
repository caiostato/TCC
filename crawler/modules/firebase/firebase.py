import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import os
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv("../../../.env"))
database_url = os.environ.get('DATABASE_URL')

cred = credentials.Certificate("crawler/modules/firebase/firebaseSDK.json")
firebase_admin.initialize_app(cred,{
        'databaseURL':database_url
})

ref = db.reference('Unidade')

def pushDB(data_list,dataServicos,dataEspecializacoes,coordsArray):
        ref.push({
                "nome": data_list[0],
                "cep": '',
                "logradouro": data_list[3],
                "numero": data_list[4],
                "bairro": data_list[5],
                "telefone": data_list[9],
                "tipoEstabelecimento": data_list[12],
                "mantenedor": data_list[14],
                "dialise":dataServicos[0],
                "quimioRadio":dataServicos[1],
                "hemoterapia":dataServicos[2],
                "latitude":coordsArray[0],
                "latitude":coordsArray[1],
                
        })

        #colocar os servicos
