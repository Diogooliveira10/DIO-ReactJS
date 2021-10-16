import React from "react"
import ReactDom from "react-dom"
import "./styles.css"

// Element menor parte da construção de algo do React, ele não é um componente
const element = 'Digital Innovation One' // pode ser string
const element2 = <h1>Hello World</h1> // pode ser HTML

// JSX retornando os dois elementos
function App() {
    return (
        <div>
            {element}
            {element2}
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDom.render(<App />, rootElement)