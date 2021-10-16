import React from 'react'

function ComponenteA(props) {

    return (
        <div>
            Componente A
            <div>{props.children}</div>
        </div>
    )
}
// Tudo que passar dentro de um componente pode se acessar através do children

export default ComponenteA