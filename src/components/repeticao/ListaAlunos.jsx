import React from "react";

import alunos from "../../Data/alunos";

export default (props) => {
    const alunosJSX = alunos.map((aluno) => {
        return (
            <li key={aluno.id}>
                {aluno.id}) {aluno.nome} -> {aluno.nota}
            </li>
        );
    });

    return (
        <div>
            <ul style={{ listStyle: "none", textAlign: "initial" }}>
                <li>{alunosJSX}</li>
            </ul>
        </div>
    );
};
