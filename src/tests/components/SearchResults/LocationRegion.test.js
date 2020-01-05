import React from 'react'
import { mount } from 'enzyme'

import LocationRegion from '../../../components/SearchResults/LocationRegion'

const mockProps = {
  region: 'foo',
  country: 'bar'
}

const render = (props = mockProps) => mount(<LocationRegion {...props} />)

test('should render region and country when both are available', () => {
  expect(render().find('.c-search-results__location-region').text()).toEqual('foo, bar')
})

test('should render only region when country is not available', () => {
  expect(render({ region: 'foo' }).find('.c-search-results__location-region').text()).toEqual('foo')
})

test('should render only country when region is not available', () => {
  expect(render({ country: 'bar' }).find('.c-search-results__location-region').text()).toEqual('bar')
})

test('should not render when region and country are not available', () => {
  expect(render({}).find('noscript').exists()).toEqual(true)
})
