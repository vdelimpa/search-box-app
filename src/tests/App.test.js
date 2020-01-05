import React from 'react'
import { MockedProvider } from '@apollo/react-testing'
import TestRenderer from 'react-test-renderer';

import App from '../App'
import mocks from './mockData'


jest.mock('react-dom', () => ({ render: jest.fn() }))

it('renders without error', () => {
  TestRenderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>,
  )
})