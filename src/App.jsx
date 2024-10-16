import "./App.css";
import React from "react";

import Primeiro from "./components/basicos/Primeiro.jsx";
import ComParametro from "./components/basicos/ComParametro.jsx";
import Fragmento from "./components/basicos/Fragmento.jsx";
import Aleatorio from "./components/basicos/Aleatorio.jsx";
import Card from "./components/layout/Card.jsx";
import Familia from "./components/basicos/Familia.jsx";
import FamiliaMembro from "./components/basicos/FamiliaMembro.jsx";
import ListaAlunos from "./components/repeticao/ListaAlunos.jsx";
import TabelaProdutos from "./components/repeticao/TabelaProdutos.jsx";
import ParOuImpar from "./components/condicional/ParOuImpar.jsx";
import UsuarioInfo from "./components/condicional/UsuarioInfo.jsx";
import DiretaPai from "./components/comunicacao/DiretaPai.jsx";
import IndiretaPai from "./components/comunicacao/IndiretaPai.jsx";
import Input from "./components/formulario/Input.jsx";
import Contador from "./components/contador/Contador.jsx";


export default () => (
    <div className="App">
        <h1>Fundamentos React </h1>

        <div className="Cards">
            <Card
                titulo="#12 - Contador"
                color="#000	"
                borderColor="#000"
            >
                <Contador numeroInicial={110}/>
            </Card>

            <Card
                titulo="#11 - Componente controlado(input)"
                color="#ffb6c1	"
                borderColor="#ffb6c1"
            >
                <Input />
            </Card>

            <Card
                titulo="#10 - Comunicação Indireta"
                color="#ffb6c1	"
                borderColor="#ffb6c1"
            >
                <IndiretaPai />
            </Card>

            <Card
                titulo="#9 - Comunicação direta"
                color="#51074a	"
                borderColor="#51074a"
            >
                <DiretaPai />
            </Card>

            <Card
                titulo="#8 - Renderização Condicional"
                color="#191970	"
                borderColor="#191970"
            >
                <ParOuImpar numero={20} />
                <UsuarioInfo usuario={{ nome: "Fernando" }} />
            </Card>

            <Card
                titulo="#7 - Exercicio de Repetição"
                color="#ffb6c1	"
                borderColor="#ffb6c1"
            >
                <TabelaProdutos />
            </Card>

            <Card titulo="#6 - Repetição" color="#f907aa	" borderColor="#f907aa">
                <ListaAlunos />
            </Card>

            <Card
                titulo="#5 - Componente com filhos"
                color="#5107aa	"
                borderColor="#5107aa"
            >
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Ramon" />
                    <FamiliaMembro nome="Karine" />
                    <FamiliaMembro nome="Maju" />
                </Familia>
            </Card>

            <Card
                titulo="#4 - Desafio aleatório"
                color="#51074a	"
                borderColor="#51074a"
            >
                <Aleatorio valormax={60} valormin={1} />
            </Card>

            <Card titulo="#3 - Card de Fragmento">
                <Fragmento />
            </Card>

            <Card
                titulo="#2 - Card com Aluno"
                color="#191970"
                borderColor="#191970"
            >
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="Ramon"
                    nota={5.6}
                />
            </Card>

            <Card
                titulo="#01 - Primeiro componente"
                color="#ffb6c1"
                borderColor="#ffb6c1"
            >
                <Primeiro />
            </Card>
        </div>
    </div>
);
