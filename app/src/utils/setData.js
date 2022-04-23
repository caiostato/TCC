// import Parser from './Parser'



const SetData = () => {

    let json = require('../json_test.json')

    let unidades = json.Unidade

    let count = 1

    let data = {}

    while (unidades[count] !== undefined){
        let endecSub = `${unidades[count].logradouro}, ${unidades[count].numero}, ${unidades[count].bairro}, ${unidades[count].municipio}, SP`
        // let addrToParse = `${unidades[count].logradouro},%${unidades[count].numero},%${unidades[count].bairro},%CAMPINAS,%SAO%PAULO,%BRAZIL`
        // Parser(addrToParse)

        //PARSER

        let dataSub = {
            nome: unidades[count].nome,
            endereco: endecSub,
            cadastrado_em: unidades[count]['cadastrado em'],
            cnes: unidades[count].cnes,
            complemento: unidades[count].complemento,
            coordenadas: unidades[count].coordenadas,
            dependencia: unidades[count].dependencia,
            telefone: unidades[count].telefone,
            servicos: unidades[count].servicos,
            atualizacao_na_base_local: unidades[count]['atualizacao na base local'],
            tipo_de_estabelecimento: unidades[count]['tipo de estabelecimento'],
            especializacoes: unidades[count].especializacoes,
        }   

        data[count] = dataSub

        //NAO MEXE
        count += 1
    }

    return data
}

export default SetData