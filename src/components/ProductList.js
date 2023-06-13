import React from "react";

import ListItem from "./ListItem";

const ProductList = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <ListItem key={item.id} name={item.name} price={item.price} />
      ))}
    </ul>
  );
};

export default ProductList;
