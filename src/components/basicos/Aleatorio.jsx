import React from "react";

export default (props) => {
    const { valormax, valormin } = props;

    const numeroAleatorio =
        parseInt(Math.random() * (valormax - valormin)) + valormin;

    return (
        <div>
            <h2>Valor aleatório</h2>
            <p>O número aleatório é {numeroAleatorio}</p>
        </div>
    );
};
