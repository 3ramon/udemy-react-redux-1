import React from "react";
import DiretaFilho from "./DiretaFilho";

export default (props) => {
    return (
        <div>
            <DiretaFilho nome="Lucas" idade={20} valor={true} />
            <DiretaFilho nome="Bruna" idade={17} valor={false} />
        </div>
    );
};
