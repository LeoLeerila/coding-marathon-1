import React, { useState } from "react"

function ShoppingCart() {
  const [item, setItem] = useState([]);
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [quat,setQuat] = useState(""); //too hard to type right quantity, so quantity=quat
  const [cost,setCost] = useState("");
  const [tax,setTax] = useState("");

  //handle change/update Name
  function handelNameChange(event){
    setName(event.target.value);
  };

 //handle change/update quantity, i know about typo.
  function handleQuatChange(event){
    setQuat(event.target.value);
  };
   //handle change/update brand
  function handleBrandChange(event){
    setBrand(event.target.value);
  };

   //handle change/update cost
  function handleCostChange(event){
    setCost(event.target.value);
  };

   //handle change/update tax
  function handleTaxChange(event){
    setTax(event.target.value);
  };


  //create new item, i wanted to make tax evasion mode, but feels bit hard to do.
  function createItemTax(){
    if (name.trim() !=="" && quat.trim() !==""&& brand.trim() !==""&& cost.trim() !==""&& tax.trim() !==""){
      setItem((x) => [...x, {name,brand,quat,cost,tax}]);
      setName("");
      setQuat("");
      setBrand("");
      setCost("");
      setTax("");
    };

  };

  // del item
  function delItem(id){
    const updItem = item.filter((_, x) => x !== id);
    setItem(updItem)
  };

  // both inputs, add/del button
  return (
    <div className="shoppingCart">
      <h1>Shopping Cart</h1>
      <div>
        <input type="text" placeholder="Enter product name" value={name} onChange = {handelNameChange}/>
        <input type="text" placeholder="Enter Brand name" value={brand} onChange={handleBrandChange}/>
        <input type="number" placeholder="Enter product quantity" value={quat} onChange = {handleQuatChange}/>
        <input type="number" placeholder="Enter product cost" value={cost} onChange = {handleCostChange}/>
        <input type="number" placeholder="Enter product Tax %" value={tax} onChange = {handleTaxChange}/>
        <button className="submit_button" onClick={createItemTax}>Add product</button>
      <ol>
        {item.map((items, id)=>(<li key={id}>
          <p>{items.name} ({items.brand}) / {items.quat} pcs </p>
          <p>Cost/Tax = {items.cost}€ / {items.tax}%</p>
          <button onClick={() => delItem(id)}>Delete</button>
        </li>))}
      </ol>
    </div>
  </div>
  )
}
 
export default ShoppingCart
