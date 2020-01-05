import React from 'react'
import PropTypes from 'prop-types'

import LocationRegion from './LocationRegion'

const DropDown = ({ locations = [] }) => locations.length ? (
  <ol className="c-search-results" role="listbox">
    {
      locations.map((location, index) => {
        const key = `pickupLocationResultsItem-${index}`
        return (
          <li
            id={key}
            key={key}
            className="c-search-results__item"
            role="option"
            tabIndex="-1"
            aria-selected="false"
          >
            <div className="c-search-results__location-name">
              {location.name}
            </div>
            <LocationRegion
              region={location.region}
              country={location.country}
            />
          </li>
        )
      })
    }
  </ol>
) : <noscript />

LocationRegion.defaultProps = {
  locations: [],
}

LocationRegion.propTypes = {
  locations: PropTypes.array.isRequired,
}

export default DropDown