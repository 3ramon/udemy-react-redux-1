import "./Card.css";

import React from "react";

export default (props) => {
    const style = {
        backgroundColor: props.color || '#d69cbc',
        borderColor: props.borderColor || '#d69cbc'
    };

    return (
        <div className="Card" style={style}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">{props.children}</div>
        </div>
    );
};
