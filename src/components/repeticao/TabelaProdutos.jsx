import "./TabelaProdutos.css";

import React from "react";

import produtos from "../../Data/produtos";

export default (props) => {
    function getProdutos() {
        return produtos.map((produto, i) => {
            return (
                <tr className={i % 2 == 0 ? "Par" : "Impar"}>
                    <td>{produto.id}</td>
                    <td>{produto.nomeProduto}</td>
                    <td>R$ {produto.preco.toFixed(2).replace(".", ",")}</td>
                </tr>
            );
        });
    }

    return (
        <div className="TabelaProdutos">
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome do produto</th>
                        <th>Valor</th>
                    </tr>
                </thead> 
                <tbody>{getProdutos()}</tbody>
            </table>
        </div>
    );
};
