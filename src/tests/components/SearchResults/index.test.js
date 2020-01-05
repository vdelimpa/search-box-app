import React from 'react'
import { mount } from 'enzyme'
import { useQuery } from '@apollo/react-hooks'

import SearchResults from '../../../components/SearchResults'
import useDebounce from '../../../components/SearchResults/useDebounce'

jest.mock('@apollo/react-hooks')
jest.mock('../../../components/SearchResults/useDebounce')

const graphQLResponse = {
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

afterEach(() => {    
  jest.clearAllMocks()
})

describe('Search Results', () => {
  it('renders the input element with the default placeholder prop', async () => {
    useDebounce.mockReturnValue('athens')
    useQuery.mockReturnValue({ loading: true })
    const wrapper = mount(<SearchResults />)
    expect(wrapper.find('input').prop('placeholder')).toEqual('city, airport, station, region, district...')
  })

  it('renders the Loader component with loading prop true', async () => {
    useDebounce.mockReturnValue('athens')
    useQuery.mockReturnValue({ loading: true })
    const wrapper = mount(<SearchResults />)
    expect(wrapper.find('Loader').prop('loading')).toEqual(true)
  })

  it('renders the Loader component with loading prop false', async () => {
    useDebounce.mockReturnValue('athens')
    useQuery.mockReturnValue({ loading: false })
    const wrapper = mount(<SearchResults />)
    expect(wrapper.find('Loader').prop('loading')).toEqual(false)
  })
  
  it('should render the DropDown component with the expected props when loading is false and data is available', () => {
    useDebounce.mockReturnValue('athens')
    useQuery.mockReturnValue(graphQLResponse)
    const wrapper = mount(<SearchResults />)
    expect(wrapper.find('DropDown').prop('locations')).toEqual(graphQLResponse.data.locations)
  })

  it('should not render the DropDown component when loading is true and data is not available', () => {
    useDebounce.mockReturnValue('athens')
    useQuery.mockReturnValue({ loading: true })
    const wrapper = mount(<SearchResults />)
    expect(wrapper.find('noscript').exists()).toEqual(true)
  })

  it('should render the error text when there is an error', () => {
    useDebounce.mockReturnValue('athens')
    useQuery.mockReturnValue({ error: true })
    const wrapper = mount(<SearchResults />)
    expect(wrapper.find('.error').text()).toEqual('Error')
  })
})
