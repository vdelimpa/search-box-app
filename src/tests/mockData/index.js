import { locationsQuery } from '../../queries'

export const mocks = [
  {
    request: {
      query: locationsQuery,
      variables: {
        place: 'athens',
      },
    },
    result: {
      "data": {
        "locations": [
          {
            "name": "Athens Airport",
            "region": "Attica",
            "country": "Greece"
          },
          {
            "name": "Athens",
            "region": "Attica",
            "country": "Greece"
          },
          {
            "name": "Athens",
            "region": "Texas",
            "country": "United States of America"
          },
          {
            "name": "Alimos",
            "region": "Attica",
            "country": "Greece"
          },
          {
            "name": "Chalandri",
            "region": "Attica",
            "country": "Greece"
          },
          {
            "name": "Elliniko",
            "region": "Attica",
            "country": "Greece"
          }
        ]
      }
    },
  },
]

export const mockProps = {
  locations: [
    {
      "name": "Athens Airport",
      "region": "Attica",
      "country": "Greece"
    },
    {
      "name": "Athens",
      "region": "Attica",
      "country": "Greece"
    },
    {
      "name": "Athens",
      "region": "Texas",
      "country": "United States of America"
    }
  ]
}

export const graphQLResponse = {
  "data": {
    "locations": [
      {
        "name": "Athens Airport",
        "region": "Attica",
        "country": "Greece"
      },
      {
        "name": "Athens",
        "region": "Attica",
        "country": "Greece"
      },
      {
        "name": "Athens",
        "region": "Texas",
        "country": "United States of America"
      },
      {
        "name": "Alimos",
        "region": "Attica",
        "country": "Greece"
      },
      {
        "name": "Chalandri",
        "region": "Attica",
        "country": "Greece"
      },
      {
        "name": "Elliniko",
        "region": "Attica",
        "country": "Greece"
      }
    ]
  },
  "loading": false
}