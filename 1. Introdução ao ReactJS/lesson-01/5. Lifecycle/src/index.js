import React, { Component } from "react" // { Component, PureComponent } dois atributos para poder criar cria componente para React, se for utilizar classe são obrigatórios.
import ReactDom from "react-dom"
import "./styles.css"

class App extends Component {   
    
    constructor(props) {
        super(props)

        this.state = {
            clock: 1000,
            copo: 'água'
       }
    }

    componentDidMount() {
        window.setTimeout(() => {
            this.setState({
                copo: 'suco'
            })
        }, 3000)
    }

    alterarCopo = () => {
        this.setState({
            copo: 'refrigerante'
        })
    }

    // quando for classe tem o metodo render, tudo que retonar pelo JSX usa a função render para ser executada.
    render() {
        const { clock, copo } = this.state
        return (
            <div>
                <h1>{clock}</h1>
                <button onClick={() => this.alterarCopo()}>
                    <h1>
                        {copo}
                    </h1>
                </button>
            </div>
        )
    }
}


const rootElement = document.getElementById("root")
ReactDom.render(<App />, rootElement)