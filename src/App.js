import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Table from "./components/Table";
import CatButton from "./components/CatButton";
import { useFetch, useManufacturer } from "./hooks";

const App = () => {
  const [category, setCategory] = useState("shirts");
  let products = `https://bad-api-assignment.reaktor.com/products/${category}`
  const [data] = useFetch(products);
  const [availability] = useManufacturer(['derp', 'xoon', 'nouke', 'abiplos', 'reps'])
  
  let mergeArrays = data.map((item) => {
      let i = 0;
      let newitem =""
      while (i < availability.length) {
        if (item.id == availability[i].id.toLowerCase()) {
          availability[i].id = item.id
          availability[i].DATAPAYLOAD = availability[i].DATAPAYLOAD.replace('<AVAILABILITY>\n  <INSTOCKVALUE>', '')
          availability[i].DATAPAYLOAD = availability[i].DATAPAYLOAD.replace('</INSTOCKVALUE>\n</AVAILABILITY>', '')
          newitem = Object.assign(item, availability[i]);
        }
        i++;
      }
      return newitem
    });

  const handleCatButton = (e) => {
    setCategory(e.currentTarget.value)
    console.log(mergeArrays)
  }  


  return (
    <div className="App">
      <Header />
      <div className="categories">
        <CatButton value="shirts" label="Shirts" color="primary" handleCatButton={handleCatButton}/>
        <CatButton value="accessories" label="Accessories" color="secondary" handleCatButton={handleCatButton}/>
        <CatButton value="jackets" label="Jackets" color="inherit" handleCatButton={handleCatButton}/>
      </div>
      <Table products={products} data={data}/>
    </div>
  );
};

export default App;
