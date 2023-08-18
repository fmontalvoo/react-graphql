import { gql } from '@apollo/client'

export const FIND_ALL = gql`
  query {
    findAll {
      id
      name
      phone
      address {
        city
        street
      }
    }
  }
`

export const FIND_BY_NAME = gql`
query getByName($name: String!) {
    findByName(name: $name) {
      id
      name
      phone
      address {
        city
        street
      }
    }
}
`