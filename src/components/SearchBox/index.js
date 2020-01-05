import React from 'react'
import PropTypes from 'prop-types'

import SearchResults from '../SearchResults'

const SearchBox = ({ label, title }) => {
  return (
    <div className="c-searchbox">
      <h2 className="c-searchwidget__title">{title}</h2>
      <label htmlFor="pickupLocation" className="c-form__label">{label}</label>
      <SearchResults />
    </div>
  )
}

SearchBox.defaultProps = {
  title: 'Where are you going?',
  label: 'Pick-up Location',
}

SearchBox.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  
}

export default SearchBox