import { func } from "prop-types"
import React from "react"
import ReactDom from "react-dom"
import "./styles.css"

// Vantagens do JSX
function sum(a, b) {
    return a + b
}

function primeiroJSX() {
    return (
        <div className="teste">
            Diogo Oliveira - Introdução ao ReactJS
            <h1>Soma: {sum(10, 20)}</h1>
        </div>
    )
}

const App = () => {
    return (
        <div className="App">
            Hello World
        </div>
    ) // Rapara executar qualquer JavaScript demtro de HTML precisa sempre colocar entre { }
}

const rootElement = document.getElementById("root")
ReactDom.render(<App />, rootElement)