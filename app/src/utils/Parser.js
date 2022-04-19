const Parser = (addr) => {

    console.log(addr)

    const APY_KEY = 'AIzaSyAWCJV7cXrCTqtArPwNLanM74WB9X2yYHc'

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${addr}%apikey${APY_KEY}`)
        .then(response => {
            console.log(response)
        })


}

export default Parser