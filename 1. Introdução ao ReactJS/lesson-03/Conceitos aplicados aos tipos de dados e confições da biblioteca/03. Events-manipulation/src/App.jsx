// Eventos e passando argumentos para manipuladores de eventos

import React from "react"

const App = () => {

  const name = 'Digital Innovation One'

  const handleChange = (e) => {
    const { value } = e.target
    console.log(value)
  }

  const showEvent = (e) => {
    console.log('evento clicado')
    console(e)
    alert(name)
  }

  const Button = <button onClick={showEvent}>Mostrar Evento</button>

    return (
      <div>
        <p>Digital Innovation One</p>
        <imput onClick={handleChange} />
        {Button}
      </div>
    )
  }

// Deletar listagem de cliente

  /*
  const listCustomer = [
    {
        id: 1,
        name: 'Diogo Oliveira',
        skills: ['JavaScript', 'CSS', 'HTML', 'React']
    },
    {
        id: 2,
        name: 'Caroline Anjos',
        skills: ['C#', 'JavaScript', 'HTML', 'CSS']
    },
    {
        id: 3,
        name: 'Bruno Carneiro',
        skills: ['React', 'Node', 'CSS', 'Webpack']
    },
    {
        id: 4,
        name: 'Fulono de Tal',
        skills: ['Go', 'React Native']
    }
]

const App = () => {

    const handleClick = (e, id) => {
      console.log('Deletar cliente')
      alert('ID do cliente: ${id}')
    }

    const renderCustomers = (customer, index) => {
      return (
        <div key={`customer-${customer.id}`}>
          <li>{customer.name} <button onClick={(e) => handleClick(e, customer.id)}>Deletar Cliente</button></li>
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
            {listCustomer.map(renderCustomers)}
          </ul>
        </div>
      </div>
    )
  }

  */
  export default App;
