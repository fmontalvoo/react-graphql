/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useUpdateNumber } from './persons/hooks/custom'


export const PhoneForm = ({ id }) => {

    const [editNumber] = useUpdateNumber()

    const handleSubmit = (event) => {
        event.preventDefault()

        const fields = Object.fromEntries(new FormData(event.target))
        const { id, phone } = fields

        editNumber({
            variables: {
                id,
                phone
            }
        })

        event.target.reset()
    }

    return (
        <>
            <h2>Update phone number</h2>
            <form onSubmit={handleSubmit}>
                <input value={id} type="text" placeholder="ID" name="id" />
                <input type="tel" placeholder="Phone" name="phone" />
                <div style={{ margin: '0.5rem' }}>
                    <button type="submit">Update</button>
                </div>
            </form>
        </>
    )
}