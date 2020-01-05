import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ClipLoader from 'react-spinners/ClipLoader'
import { css } from '@emotion/core'
import { useQuery } from '@apollo/react-hooks'

import useDebounce from './useDebounce'
import { locationsQuery } from '../../queries'
import DropDown from './DropDown'

const override = css`
  position: absolute;
  right: 11px;
  top: calc(50% - 9px);
`;


const SearchResults = ({ placeholder }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const place = useDebounce(searchTerm)

  const { data, loading, error } = useQuery(
    locationsQuery,
    { variables: { place } },
  )

  if (error) return <div className="error">Error</div>

  return (
    <div>
      <div className="c-searchwidget__input-container">
        <input
          type="text"
          id="pickupLocation"
          placeholder={placeholder}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <ClipLoader
          css={override}
          size={15}
          color={"#444"}
          loading={loading}
        />
      </div>
      {
        (!loading && data) ?
          <DropDown locations={data.locations} />
          :
          <noscript />
      }
    </div>
  )
}

SearchResults.defaultProps = {
  placeholder: 'city, airport, station, region, district...'
}

SearchResults.propTypes = {
  placeholder: PropTypes.string.isRequired
}

export default SearchResults

