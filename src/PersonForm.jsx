/* eslint-disable no-unused-vars */
import { useAddPerson } from './persons/hooks/custom'


export const PersonForm = () => {

    const [addPerson] = useAddPerson()

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