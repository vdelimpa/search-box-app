const axios = require('axios')
const { locations } = require('../../resolvers/locations')

const mockData = {
  data: {
    results: {
      docs: [  
        {
          "country": "United Kingdom",
          "city": "London",
          "placeKey": "1472178",
          "name": "Heathrow Airport",
          "region": "Greater London",
        },
      ]
    }
  }
}

const emptyData = {
  data: {
    results: {
      docs: []
    }
  }
}

afterEach(() => {    
  jest.clearAllMocks();
});

test('it should return the transformed location to match schema for valid location', async () => {
  jest.spyOn(axios, 'get')

  axios.get.mockResolvedValue(mockData);
  const expectedData = await locations(null, { place:"london" })
  const response = [{"city": "London", "country": "United Kingdom", "id": "1472178", "name": "Heathrow Airport", "region": "Greater London"}]
  
  expect(expectedData).toEqual(response)
})

test('it should return an empty array if the entered location is invalid', async () => {
  jest.spyOn(axios, 'get')

  axios.get.mockResolvedValue(mockData);
  const expectedData = await locations(null, { place: "%$^%" })
  expect(expectedData).toEqual([])
})

test('it should return an empty array when location is valid and response is empty', async () => {
  jest.spyOn(axios, 'get')

  axios.get.mockResolvedValue(emptyData);
  const expectedData = await locations(null, { place: "athens" })
  expect(expectedData).toEqual([])
})

test('it should call axios GET method with expected arguments', async () => {
  const spy = jest.spyOn(axios, 'get')
  axios.get.mockResolvedValue(mockData);
  await locations(null, { place:"london" })  
  expect(spy).toHaveBeenCalledWith("https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=london")
})