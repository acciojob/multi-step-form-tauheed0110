import React, { useState } from 'react';

const Car = ({handleCardName, hanldeFormData}) => {
    const [model, setModel] = useState("");
    const [price, setPrice] = useState("");

    function handleNext(e){
        e.preventDefault();
        if(!model || !price) return;
        const data = {
            model: model,
            price: price
        }
        hanldeFormData(data);
        setModel("")
        setPrice("");
        // set the name of the component to which i have to render.
        handleCardName("payment");
    }
    function handlePrevious(e){
        e.preventDefault();
        // pass prop to render previous form.
        handleCardName("customer");

    }
  return (
    <div>
      <h1>Car Details</h1>
      <form>
        <div className='formItem'>
            <label htmlFor='model'>Brand</label><br />
            <input type='text' id="model" name='make' value={model} onChange={(e)=>setModel(e.target.value)}/>
        </div>
        <div className='formItem'>
            <label htmlFor='car_price'>Price</label><br />
            <input type='number' id="car_price" name='model' value={price} onChange={(e)=>setPrice(e.target.value)}/>
        </div>
        
        <div className='formItem flexBtn'>
            <button onClick={(e)=>handlePrevious(e)}>Previous</button>
            <button onClick={(e)=>handleNext(e)}>Next</button>
        </div>
      </form>
    </div>
  );
}

export default Car;
