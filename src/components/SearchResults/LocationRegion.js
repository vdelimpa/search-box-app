import React from 'react'
import PropTypes from 'prop-types'

const LocationRegion = ({ region, country }) => (region || country) ? (
  <div className="c-search-results__location-region">
    {[region, country].filter(each => !!each).join(', ')}
  </div>
) : <noscript />

LocationRegion.propTypes = {
  region: PropTypes.string,
  country: PropTypes.string,
}

export default LocationRegion