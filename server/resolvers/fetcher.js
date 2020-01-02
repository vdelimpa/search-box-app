const axios = require('axios')
const { constructUrl } = require('./util')

exports.fetchData = async (place) => { 
    const url = constructUrl(place)
    const { data } = await axios.get(url)
    return data.results.docs;
}

