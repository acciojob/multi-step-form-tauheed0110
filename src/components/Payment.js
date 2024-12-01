import React, { useState } from 'react';

const Payment = ({handleCardName, hanldeFormData, formData}) => {
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");

    function handlePrevious(e){
        e.preventDefault();
        handleCardName("car");
    }
    function handleSubmit(e){
        e.preventDefault();
        if(cardNumber.length != 12 || !expiry) return;
        const data = {
            card: cardNumber,
            expiry: expiry
        }
        hanldeFormData(data);
        console.log({...formData, ...data});
        setCardNumber("");
        setExpiry("");
        handleCardName("customer");
    }
  return (
    <div id='step3'>
      <h1>Payment Details</h1>
      <form>
        <div className='formItem'>
            <label htmlFor='card_info'>Credit Card Number</label><br />
            <input type='text' id="card_info" name='card_info' value={cardNumber} onChange={(e)=>setCardNumber(e.target.value)}/>
            <p className='logError' style={{display: cardNumber.length == 12 ? "none": "block"}}>Card number must of exact 12 length</p>
        </div>
        <div className='formItem'>
            <label htmlFor='expiry_date'>Expiry Date</label><br />
            <input type='date' id="expiry_date" name='expiry_date' value={expiry} onChange={(e)=>setExpiry(e.target.value)}/>
        </div>
        
        <div className='formItem flexBtn'>
            <button onClick={(e)=>handlePrevious(e)}>Previous</button>
            <button onClick={(e)=>handleSubmit(e)}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Payment;
