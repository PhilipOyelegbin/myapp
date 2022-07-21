import React, { useState, useEffect, useRef } from 'react'

const Form = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [show, setShow] = useState(false);
    const [error, setError] = useState("");
    const fName = useRef()
    const lName = useRef()

    console.log(fname, lname, email, dob);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        fname.length < 3 ? setError("First name too short") : fname.includes(" ") ? setError("First name cannot have spaces") : lname.length < 3 ? setError("Last name too short") : lname.includes(" ") ? setError("Last name cannot have spaces") : alert("form submitted");
    }
  return (
    <form onSubmit={handleSubmit}>
        <div className='form-control'>
            <label htmlFor="">First Name</label>
            <input type="text" ref={fName} onChange={() => setFname(fName.current.value)} placeholder='Enter first name' />
        </div>
        <div className='form-control'>
            <label htmlFor="">Last Name</label>
            <input type="text" ref={lName} onChange={() => setLname(lName.current.value)} placeholder='Enter last name' />
        </div>
        <div className='form-control'>
            <label htmlFor="">Email</label>
            <input type="email" onChange={(event) => setEmail(event.target.value)} placeholder='Enter email address' />
        </div>
        <div className='form-control'>
            <label htmlFor="" onChange={(event) => setDob(event.target.value)}>Date of Birth</label>
            <input type="date" />
        </div>
        <div className='form-control'>
            <label htmlFor="">Password</label>
            <input type={show ? "text": "password"} placeholder='Enter password' />
        </div>
        <div className='form-control'>
            <label htmlFor="">Confirm Password</label>
            <input type={show ? "text": "password"} placeholder='Enter previous password' />
        </div>
        <div className='flex gap-1 items-center mb-3'>
            <input className='cursor-pointer' type="checkbox" onClick={() => setShow(prev => !prev)} />
            <label htmlFor="">Show Password</label>
            <p className='text-red-500 text-sm'>{error}</p>
        </div>
        <button type='submit' className='bg-blue-500 text-white rounded-md px-5 py-2'>REGISTER</button>
    </form>
  )
}

export default Form