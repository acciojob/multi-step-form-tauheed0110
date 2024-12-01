
import React, { useState } from "react";
import './../styles/App.css';
import Customer from "./Customer";
import Car from "./Car";
import Payment from "./Payment";

const App = () => {
  // create a state to have the name of the card to which i will render;
  const [cardName, setCardName] = useState("customer");
  const [formData, setFormData] = useState({});

  const handleCardName = (name)=>{
    setCardName(name)
  }
  const hanldeFormData = (data)=>{
    setFormData({...formData, ...data});
  }
  return (
    <div className="main">
      {
        cardName === "customer" ? <Customer handleCardName={handleCardName} hanldeFormData={hanldeFormData}/> : 
        cardName === "car" ? <Car handleCardName={handleCardName} hanldeFormData={hanldeFormData}/> : 
        cardName === "payment" ? <Payment handleCardName={handleCardName} hanldeFormData={hanldeFormData}formData={formData}/>: false
      }
    </div>
  )
}

export default App
