import React from 'react'
import { mount } from 'enzyme'

import DropDown from '../../../components/SearchResults/DropDown'
import { mockProps } from '../../mockData'

const render = (props = mockProps) => mount(<DropDown {...props} />)

test('should render drop-down items when locations is not empty', () => {
  expect(render().find('.c-search-results__item').length).toEqual(3)
})

test('should not render drop-down items when locations is an empty array', () => {
  expect(render({ locations: [] }).find('.c-search-results__item').length).toEqual(0)
})

test('should return null when no locations is passed as a prop', () => {
  expect(render({}).find('noscript').exists()).toEqual(true)
})