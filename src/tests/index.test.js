import React from 'react'
import ReactDOM from 'react-dom'

import App from '../App'

jest.mock('react-dom', () => ({ render: jest.fn() }))

test('should render without crashing', () => {
  const div = document.createElement('div')
  div.setAttribute('id', 'root')
  document.body.appendChild(div);
  require('..')
  expect(ReactDOM.render).toHaveBeenCalledWith(<App />, div);
})