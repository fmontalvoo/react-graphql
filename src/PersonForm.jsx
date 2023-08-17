/* eslint-disable no-unused-vars */

import { gql, useMutation } from '@apollo/client'

const ADD_PERSON = gql`
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

export const PersonForm = () => {

    const [addPerson] = useMutation(ADD_PERSON)

    const handleSubmit = (event) => {
        event.preventDefault()

        const fields = Object.fromEntries(new FormData(event.target))
        const { name, phone, city, street } = fields

        console.log(name, phone, city, street)

        addPerson({
            variables: {
                name,
                phone,
                city,
                street
            }
        })

        event.target.reset()
    }

    return (
        <div>
            <h2>Add new person</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="Name" name="name" />
                    <input type="tel" placeholder="Phone" name="phone" />
                </div>
                <div>
                    <input type="text" placeholder="City" name="city" />
                    <input type="text" placeholder="Street" name="street" />
                </div>
                <div style={{ margin: '0.5rem' }}>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}