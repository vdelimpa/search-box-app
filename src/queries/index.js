import gql from 'graphql-tag'

export const locationsQuery = gql`
  query Location($place: String!){
  locations(place: $place ) {
    name
    region
    country
  }
}`