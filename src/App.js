import React,{useState} from "react";

import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList'

function App() {
  const products= [];
  const [totalAmount, setTotalAmount] = useState(0);
  const [product, setProduct] = useState(products)
  const addNewProductHandler =(newProduct) =>{
    setProduct((prevProduct) => {
      return [...prevProduct, newProduct]
    })
    setTotalAmount(totalAmount+newProduct.price)
    // console.log(product)
  }
  return (
    <div>
      <ProductForm onAdd={addNewProductHandler}/>
      <h3>Products</h3>
      <ProductList items={product}/>
      <p>Total Value of Products: {totalAmount} </p>
    </div>
  );
}

export default App;
