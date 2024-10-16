import "./input.css"

import React, { useState } from "react";

export default (props) => {
    const [valor, setValor] = useState("Inicial");

    function quandoMudar (e) {
        setValor(e.target.value)
    }

    return (
        <div className="input">
            <input value={valor} onChange={quandoMudar}/>
            <input value={valor} readOnly/>
        </div> 
    );
};
