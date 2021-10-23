/*   
    Renderizando Múltiplos Componentes
    Componente de Lista Básico
    Extraindo Componentes com Chaves
    Chaves devem ser únicas apenas entre Elmentos irmãos
*/
import React from "react"

// Componente de Lista Básico
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

    const renderCustomers = (customer, index) => {
      return (
        <div key={`customer-${customer.id}`}>
          <li>{customer.name}</li>
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
  export default App;