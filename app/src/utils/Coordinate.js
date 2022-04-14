function getCords(){
    let posicao
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(pos => {
            posicao = pos
            return posicao;
        })
    }
}

export default getCords