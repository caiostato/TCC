# import json

# data={}
# data['unidade']=[]
# data['unidade'].append({

#     "id":"01",
#     "nome":"",
#     "cep":"",
#     "logradouro":"",
#     "numero":"",
#     "complemento":"",
#     "tipoEstabelecimento":"",
#     "quimioRadio":"bool",
#     "dialise":"bool",
#     "hemoterapia":"bool",
#     "atencaoPrimaria":"",
#     "imunizacao":"",
#     "profissionais":[]	
# })
# with open('json/unidades.json','a') as outfile:
#     json.dump(data,outfile)


    
    # posicao = int (rowChild[z].index(find) + len(find))
    # aux = rowChild[z]
    # rowChild[z]=''
    
    # for w in range(posicao,len(aux)):
    #     print(aux[w])
    #     while(aux[w]!='"'):
    #         rowChild[z] = rowChild[z] + aux[w]

#<input class="form-control input-sm" id="nome" type="text" ng-value="estabelecimento.noFantasia" readonly="" value="CENTRO DE SAUDE BARAO GERALDO">
find = 'CENTRO DE SAUDE'
aux= ''
p = '<input class="form-control input-sm" id="nome" type="text" ng-value="estabelecimento.noFantasia" readonly="" value="CENTRO DE SAUDE BARAO GERALDO">'
pos = p.index(find)

for w in range(pos,len(p)):
    if p[w]=='"' or p[w]=='>':
        pass
    else:
        aux = aux + p[w]

print('aux:'+aux)