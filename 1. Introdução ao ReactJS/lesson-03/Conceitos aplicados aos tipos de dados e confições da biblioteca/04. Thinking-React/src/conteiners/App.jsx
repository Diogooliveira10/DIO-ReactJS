/*
  * Comece com um Mock
  * Separe a UI em uma hierarquia de componentes
  * Crie uma versão estática em React
  * Identifique a representação mínima ( mas completa ) do State da UI
  * Identifique onde o State deve ficar
*/

import React from "react"
import Button from "../components/Button"
import Mock from '../mock'

const App = () => {

  const handleClick = (e, id) => {
    console.log('Deletar cliente')
    alert('ID do cliente: ${id}')
  }

  const renderCustomers = (customer, index) => {
    return (
      <div key={`customer-${customer.id}`}>
        <li>{customer.name} <Button onClick={() => handleClick(customer.id)}>Deletar o Cliente</Button></li>
        {customer.skills.map(renderSkills)}
      </div>
    )
  }
  
  const renderSkills = (skill, index) => {
    return (
      <div style={{ paddingLeft: '30px' }} key={`skill-${index}`}>
        <li>{skill}</li>
      </div>
    )
  }
  
  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      <div>
        <ul>
          {Mock.map(renderCustomers)}
        </ul>
      </div>
    </div>
  )
}

export default App;
