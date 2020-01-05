const { isValidLocation, constructUrl } = require('../../resolvers/util')

describe('isValidLocation', () => {
  test('should return true for alphanumeric location', () => {
    expect(isValidLocation("london12")).toEqual(true)
  });

  test('should return true for alphanumeric uppercase location', () => {
    expect(isValidLocation("Paris12")).toEqual(true)
  });
  
  test('should return false for non-alphanumeric location', () => {
    expect(isValidLocation("%$^")).toEqual(false)
  });
  
  test('should return false for empty location', () => {
    expect(isValidLocation()).toEqual(false)
  });
})

describe('constructUrl', () => {
  test('should return expected URL when there is a given place', () => {
    expect(constructUrl("london12")).toEqual("https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=london12")
  });

  test('should return expected URL when there is not a given place', () => {
    expect(constructUrl()).toEqual("https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=")
  });
})