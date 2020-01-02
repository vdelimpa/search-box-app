const { fetchData } = require('./fetcher')
const { isValidLocation } = require('./util')

const locationConstructor = (data) => {
  return data.map(({ name, placeKey: id, city, country, region }) => ({ name, id, city, country, region }))
}

exports.locations = async (_, { place }) => {
    if (isValidLocation(place)) {
      const data = await fetchData(place)
      return locationConstructor(data)
    } 
    return []
  }
