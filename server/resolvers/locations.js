const { fetchData } = require('./fetcher')

exports.locations = async () => {
  const data = await fetchData()
  console.log(data)
  return [
    {
      name: 'London'
    }
  ]
}