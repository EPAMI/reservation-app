import React from 'react'
import { useState } from 'react'

export default function BookingForm() {
    const [name,setName] = useState ("");
    const [date, setDate] = useState("");
    const handleSubmit = () =>{}
  return (
   <form onSubmit={handleSubmit} >
    <label htmlFor='name'>Name:</label>
    <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)}/>
    <label htmlFor='date'>Date:</label>
    <input type='date' id='date' value={date} onChange={(e) => setDate(e.target.value)}/>
    <button type='submit'>Submit</button>
   </form>
  )
}
