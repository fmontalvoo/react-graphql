import { gql, useQuery } from '@apollo/client'

import reactLogo from './assets/react.svg'
import './App.css'

const FIND_ALL = gql`
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

function App() {

  const { data, error, loading } = useQuery(FIND_ALL)

  if (error)
    return <span style='color: red'>{error}</span>

  return (
    <>
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>GraphQL + React</h1>
      {
        loading
          ? <p>Loading...</p>
          : (<table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {data.findAll.map(({ id, name, phone, address }) => (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{phone}</td>
                  <td>{address.city}, {address.street}</td>
                </tr>
              ))}
            </tbody>
          </table>
          )
      }
    </>
  )
}

export default App
