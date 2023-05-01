import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm() {
//   const [location, setLocation] = useState('');
  const [name, setName] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic for handling the form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
        <fieldset >
        <legend align="center"><b>Room Booking</b></legend>
        <br></br>
        <div>
        <label className='ro'>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br></br>
      <label className='ro'>
        Room Type:
        </label>
        <select className='date'>
 <option value="select">-----</option>
<option value="sigle">Single</option>
<option value="Double">Double</option>
<option value="Ps">Presidential Suite</option>
       </select>
      
      </div>

<br></br>
      
      <div>
      <label className='ro'>
        Check-in date:
        <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} />
      </label>
      </div>

   <br></br>

      <div>
      <label className='ro'>
        Check-out date:
        <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} />
      </label>
      </div>

 <br></br>

      <button className='btn'>Submit</button>
      </fieldset>
    </form>
  );
}

export default SearchForm;