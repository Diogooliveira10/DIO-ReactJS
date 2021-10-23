import React from "react"

// Variáveis de Elementos
const buttonA = <button>Histórico dos Clientes</button>

const buttonB = <button>Cadastrar Clinete</button>

const hasCustomer = true

const App = () => {

    const renderShowHistory = () => (
        <div>
            Clique no botão abaixo para visualizar o histórico dos clientes:
            <br />
            {buttonA}
        </div>
    )

    const renderAddCustomer = () => (
        <div>
            Clique abaixo para Cadastrar o cliente:
            <br />
            {buttonB}
        </div>
    )

    const showCustomer = () => { // Evitando que um Componente seja Renderizado

        if (!hasCustomer) return null
    
        return (
          <div>
            <h1>Nome do Cliente: Bruno Carneiro</h1>
          </div>
        )
      }
    
      console.log('hasCustomer', hasCustomer)
    
    

    return ( // If-Else inline com Operador Condicional
        <div>
            <p>Digital Innovation One</p>
            {hasCustomer ? renderShowHistory() : renderAddCustomer()} 
            <div>
                {showCustomer()}
            </div>
        </div>
        
    )
}

export default App