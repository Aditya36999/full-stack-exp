import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

const ProductCard = ({ name, price, status }) => {
  return (
    <div className="product-card">
      <h2 className="product-name">{name}</h2>
      <p>Price: ${price}</p>
      <p>Status: {status}</p>
    </div>
  );
};

const App = () => {
  const products = [
    { name: "Wireless Mouse", price: 25.99, status: "In Stock" },
    { name: "Keyboard", price: 45.5, status: "Out of Stock" },
    { name: "Monitor", price: 199.99, status: "In Stock" },
  ];

  return (
    <div className="container">
      <h1 className="title">Products List</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            status={product.status}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
