import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default (props) => {
    const [nome, setNome] = useState("?");
    const [idade, setIdade] = useState(0);
    const [nerd, setNerd] = useState(false);

    function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
        setNome(nomeParam);
        setIdade(idadeParam);
        setNerd(nerdParam);
    }

    return (
        <div>
            <div>Pai</div>
            <span>{nome}</span>
            <span> - {idade} - </span>
            <span>{nerd ? "É nerd!" : "Não é nerd!"}</span>
            <IndiretaFilho quandoClicar={fornecerInformacoes} />
        </div>
    );
};
