import React from "react"
import ReactDom from "react-dom"
import Button from './Button'
import ComponentA from "./ComponentA"
import ComponentB from "./ComponentB"
import "./styles.css"

function soma(a, b) {
    alert(a + b)
}

function App() {

    return (
        <div className="App">
            Hello World
            <Button onClick={() => soma(10, 20)} name="Diogo Oliveira" />
            <ComponentA>
                <ComponentB>
                    <Button onClick={() => soma(30, 10)} name="Caroline Anjos"/>
                </ComponentB>
            </ComponentA>
        </div>
    )
}
// Posso criar vários components

const rootElement = document.getElementById("root")
ReactDom.render(<App />, rootElement)