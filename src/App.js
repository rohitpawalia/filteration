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
  const [category, setCategory] = useState(null)

  const handleChange = event => {
    setQuery(event.target.value)
    
  }


  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().includes(query.toLowerCase())
  );


  const handleRadio = event => {
    setCategory(event.target.value)
    
  }

  const handleButton = event => {
    setCategory(event.target.value)
    console.log(category)

    
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );

  }

  const result = filteredData(products, category, query);
  return (
    <>
    <Sidebar handleRadio={handleRadio} />
    <Nav query={query} handleChange={handleChange} />
    <Recommended handleButton={handleButton} />
    <Products result={result} />
   
    </>
  );
}

export default App;
