// Boa pratica: nome de arquivos de componentes e página sempre usar o padrão camelcase.

import React from 'react'

function Button(props) {

    const { name, onClick } = props

    // JSX
    return (
        <button onClick={onClick}>{name}</button>
    )
}

export default Button