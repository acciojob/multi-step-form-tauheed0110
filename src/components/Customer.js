import React, { useState } from 'react';

const Customer = ({handleCardName, hanldeFormData}) => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");

    function handleNext(e){
        e.preventDefault();
        if(!fname || !lname) return;
        const data = {
            firstname: fname,
            lastname: lname
        }
        hanldeFormData(data);
        setFname("")
        setLname("");
        handleCardName("car");
    }
  return (
    <div id='step1'>
      <h1>Customer Details</h1>
      <form>
        <div className='formItem'>
            <label htmlFor='first_name'>First Name</label><br />
            <input type='text' id='first_name' name='firstname' value={fname} onChange={(e)=>setFname(e.target.value)}/>
        </div>
        <div className='formItem'>
            <label htmlFor='last_name'>Last Name</label><br />
            <input type='text' id='last_name' name='lastname' value={lname} onChange={(e)=>setLname(e.target.value)}/>
        </div>
        <button onClick={(e)=>handleNext(e)}>Next</button>
      </form>
    </div>
  );
}

export default Customer;
