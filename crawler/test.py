import json

data={}
data['unidade']=[]
data['unidade'].append({

    "id":"01",
    "nome":"",
    "cep":"",
    "logradouro":"",
    "numero":"",
    "complemento":"",
    "tipoEstabelecimento":"",
    "quimioRadio":"bool",
    "dialise":"bool",
    "hemoterapia":"bool",
    "atencaoPrimaria":"",
    "imunizacao":"",
    "profissionais":[]	
})
with open('json/unidades.json','a') as outfile:
    json.dump(data,outfile)