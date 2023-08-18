import { gql } from '@apollo/client'

export const ADD_PERSON = gql`
mutation savePerson($name: String!, $city: String!, $street: String!, $phone: String) {
    addPerson(name: $name, city: $city, street: $street, phone: $phone) {
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