const axios = require('axios')

// const conctructUrl = () => {}

exports.fetchData = async () => {
  const { data } = await axios.get('https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=london')
  return data
}



