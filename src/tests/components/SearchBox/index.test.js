import React from 'react'
import { mount } from 'enzyme'
import { useQuery } from '@apollo/react-hooks'

import SearchBox from '../../../components/SearchBox'

jest.mock('@apollo/react-hooks')
jest.mock('../../../components/SearchResults/useDebounce')

const render = (props = {}) => mount(<SearchBox {...props} />)

afterEach(() => {    
  jest.clearAllMocks()
})

useQuery.mockReturnValue({ loading: true })


describe('SearchBox elements', () => {
  it('should render the SearchBox container', () => {
    expect(render().find('.c-searchbox').exists()).toEqual(true)
  })

  it('should render the SearchBox title', () => {
    expect(render().find('.c-searchwidget__title').exists()).toEqual(true)
  })

  it('should render the form field label', () => {
    expect(render().find('.c-form__label').exists()).toEqual(true)
  })
  
})

describe('SearchBox Props', () => {
  it('should render the SearchBox title with the default title', () => {
    expect(render().find('.c-searchwidget__title').text()).toEqual('Where are you going?')
  })

  it('should render the form field label with the default label', () => {
    expect(render().find('.c-form__label').text()).toEqual('Pick-up Location')
  })

  it('should render the SearchBox component with the expected title prop', () => {
    const title = 'Let’s find your ideal car'
    expect(render({ title }).find('.c-searchwidget__title').text()).toEqual(title)
  })
  
  it('should render the SearchBox component with the expected label prop', () => {
    const label = 'Enter your pick-up location'
    expect(render({ label }).find('.c-form__label').text()).toEqual(label)
  })
})

describe('SearchBox Accessibility', () => {
  it('label and input element should be associated', () => {
    const wrapper = render()
    expect(wrapper.find('.c-form__label').prop('htmlFor')).toEqual('pickupLocation')
    expect(wrapper.find('input').prop('id')).toEqual('pickupLocation')
  })
  
})

describe('Snapshot test', () => {
  it('should match the snapshot of the SearchBox component render', () => {
    expect(render()).toMatchSnapshot();
  })
})