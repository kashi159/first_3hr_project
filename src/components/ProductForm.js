import React, { useState } from "react";

const ProductForm = (props) => {
  const [isId, setIsId] = useState("");
  const [isPrice, setIsPrice] = useState("");
  const [isName, setIsName] = useState("");

  const idChangeHandler = (event) => {
    setIsId(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setIsPrice(event.target.value);
  };

  const nameChangeHandler = (event) => {
    setIsName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const newProduct = {
      id: isId,
      price: +isPrice,
      name: isName,
    };
    props.onAdd(newProduct);
    localStorage.setItem(isId, JSON.stringify(newProduct));
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label htmlFor="id">Product Id:</label>
        <input type="number" id="id" value={isId} onChange={idChangeHandler} />
      </div>
      <div>
        <label htmlFor="price">Selling Price</label>
        <input
          type="number"
          id="price"
          value={isPrice}
          onChange={priceChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          id="name"
          value={isName}
          onChange={nameChangeHandler}
        />
      </div>
      <div>
        <button type="submit">Add Product</button>
      </div>
    </form>
  );
};

export default ProductForm;
