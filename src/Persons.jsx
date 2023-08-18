/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from 'react'
import { useEffect } from 'react'
import { PhoneForm } from './PhoneForm'
import { usePerson } from './persons/hooks/custom'


export const Persons = ({ persons }) => {
    const [getPerson, result] = usePerson()
    const [person, setPerson] = useState(null)

    const findPerson = name => {
        getPerson({ variables: { name } })
    }

    useEffect(() => {
        if (result.data)
            setPerson(result.data.findByName)
    }, [result])

    if (person)
        return (
            <div>
                <a onClick={() => setPerson(null)}>back</a>
                <h2>{person.name}</h2>
                <p>{person.phone}</p>
                <p>{person.address.street}, {person.address.city}</p>
                <PhoneForm id={person.id} />
            </div>
        )

    if (!persons) return null

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {persons.map(({ id, name, phone, address }) => (
                    <tr key={id}>
                        <td>{name}</td>
                        <td>{phone}</td>
                        <td>{address.street}</td>
                        <td>
                            <button onClick={() => findPerson(name)}>Find</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}