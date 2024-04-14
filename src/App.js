import React, { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import products from "./db/data";
import "./index.css";
import Card from "./components/Card";

function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(null);

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleRadio = event => {
    setCategory(event.target.value);
  };

  const handleButton = event => {
    setCategory(event.target.value);
    console.log(category);
  };

  const filteredItems = products.filter(product =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(product =>
        product.category === selected ||
        product.color === selected ||
        product.company === selected ||
        product.newPrice.toString() === selected ||
        product.title === selected
      );
    }

    return filteredProducts.map(({ img, title, star, reviews, prevPrice, newPrice }) => (
      <Card
        key={Math.random()} // Consider using unique IDs instead of Math.random() if possible
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />
    ));
  }

  const result = filteredData(products, category, query);

  return (
    <div className="flex h-screen">
      <Sidebar handleRadio={handleRadio} />
      <div className="flex-grow flex flex-col">
        <Nav handleChange={handleChange} query={query} />
        <div className="overflow-auto">
          <Recommended handleButton={handleButton} />
          <div>
          <Products result={result} />
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default App;
