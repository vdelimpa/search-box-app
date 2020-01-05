import React from 'react'
import { MockedProvider } from '@apollo/react-testing'
import TestRenderer from 'react-test-renderer';

import Root from '../index'
import locationsQuery from '../queries'

const mocks = [
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

jest.mock('react-dom', () => ({ render: jest.fn() }))

xit('renders without error', () => {
  TestRenderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Root />
    </MockedProvider>,
  );
});