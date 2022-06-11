const Parser = (addr) => {

    console.log(addr)

    const APY_KEY = ''

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${addr}%apikey${APY_KEY}`)
        .then(response => {
            console.log(response)
        })


}

export default Parser
