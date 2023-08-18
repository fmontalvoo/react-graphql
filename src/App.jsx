import { useState } from 'react'

import { Notify } from './Notify'
import { Persons } from './Persons'
import { PersonForm } from './PersonForm'
import { usePersons } from './persons/hooks/custom'

import './App.css'
import reactLogo from './assets/react.svg'

function App() {
  const { data, error, loading } = usePersons()
  const [errorMessage, setErrorMessage] = useState(null)

  if (error)
    return <span style='color: red'>{error}</span>

  const notifyError = message => {
    setErrorMessage(message)
    setTimeout(() => setErrorMessage(null), 5000)
  }

  return (
    <>
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>GraphQL + React</h1>
      <PersonForm notifyError={notifyError} />
      {
        loading
          ? <p>Loading...</p>
          : <Persons persons={data?.findAll} />
      }
      <Notify errorMessage={errorMessage} />
    </>
  )
}

export default App
