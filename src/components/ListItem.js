import React from "react";

const ListItem = (props) => {
    return(
        <li key={props.id}>
            {props.name} {props.price}
        </li>
    )
};

export default ListItem;