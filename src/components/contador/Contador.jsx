import "./Contador.css";

import { render } from "@testing-library/react";
import React, { Component } from "react";

class Contador extends Component {
    state = {
        numero: this.props.numeroInicial || 10,
        passo: this.props.passoInicial || 5,
    };

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    };

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        });
    };

    setPasso = (event) => {
        this.setState({
            passo: +event.target.value,
        });
    };

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <h3>Valor Atual: {this.state.numero}</h3>
                <div>
                    <label htmlFor="passoInput">
                        Passo:
                        <input
                            id="passoInput"
                            type="number"
                            value={this.state.passo}
                            onChange={this.setPasso}
                        />
                    </label>
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        );
    }
}

export default Contador;
