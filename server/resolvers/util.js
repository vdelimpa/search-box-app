exports.constructUrl = (place = "") => {
  const baseUrl = "https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm="
  return `${baseUrl}${place}`
}

exports.isValidLocation = (place = "") => {
  const regex = RegExp(/^([0-9]|[a-z])+([0-9a-z]+)$/)
  return regex.test(place)
}