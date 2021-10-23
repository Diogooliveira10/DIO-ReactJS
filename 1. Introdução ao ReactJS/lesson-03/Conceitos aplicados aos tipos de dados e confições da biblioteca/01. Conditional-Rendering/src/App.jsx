import React from "react"

// Variáveis de Elementos
const buttonA = <button>Histórico dos Clientes</button>

const buttonB = <button>Segundo Botão</button>

const hasCustomer = true

const App = () => {
    return (
        <div>
            <p>Digital Innovation One</p>
            {hasCustomer && ( // If inline com o Operador Lógico &&
                <div>
                    Clique no botão abaixo para visualizar o histórico dos clientes:
                    <br />
                    {buttonA}
                </div>
            )}
        </div>
    )
}

export default App