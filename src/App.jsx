import { Persons } from './Persons'
import { PersonForm } from './PersonForm'
import { usePersons } from './persons/hooks/custom'

import './App.css'
import reactLogo from './assets/react.svg'

function App() {

  const { data, error, loading } = usePersons()

  if (error)
    return <span style='color: red'>{error}</span>

  return (
    <>
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>GraphQL + React</h1>
      <PersonForm />
      {
        loading
          ? <p>Loading...</p>
          : <Persons persons={data?.findAll} />
      }
    </>
  )
}

export default App
