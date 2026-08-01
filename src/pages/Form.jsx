import React, { useState } from 'react'
import {  Link } from 'react-router-dom'
import "./Form.css"
import { auth } from '../firebase'
import { collection, doc, setDoc } from 'firebase/firestore'
import { db } from '../firebase'


const Form = () => {
  
const [status, setStatus] = useState("");



async function createStudent() {
  try {
    await setDoc(doc(db, "students", "student1"),
    {
      name : "john Doe",
      age : 20,
      course : "computer science"
    }
  );

setStatus("Student created successfully");

  } catch (error) {
    setStatus(error.message)
  }
  
}
  
  const [passport, setPassword] = useState("")

  const handleFileChange = (e) => {
    setPassport(e.target.files[0]);
  };

  return (
    <div className='pew'>
      <div className='wet'>
        <h1>   MAGNITUDE GROUP OF SCHOOLS </h1>
        <nav>
      <ul>
          <li>
            <Link to="/">Home</Link>
            
            
          </li>
        </ul>
        </nav>
        </div>
        <div className="head">
            <h2> STUDENT ADMISSION FORM </h2>
            <span>Personal Information</span>
            <h3>First Name: <input type="text" className='pp'/> </h3>
            <h3>Last Name: <input type="text"  className='pp'/></h3>
            <h3>Middle Name: <input type="text"  className='pp'/></h3>
            <h3></h3>
            <label>
              <input  type="checkbox" name='text' />
              Male
            </label>
              <label>
              <input type="checkbox" name='text' />
              female
            </label>
            <h3>Date of birth :<input type="text" className='pp' /></h3>
            <h3>Phone Number :<input type="text"  className='pp'/></h3>
            <h3>Email address :<input type="text"  className='pp'/></h3>
            <h3>Residential Address :<input type="text" className='pp'/></h3>
            <hr />
            <h1>Parent Name:<input type="text"  className='pp'/></h1>
              <h3>Phone Number:<input type="text"  className='pp'/></h3>
              <h3>Occupation:<input type="text"  className='pp'/> </h3>
              <h3>Address:<input type="text"className='pp' /></h3>
                  <hr />
                  <h2>Academic Information</h2>
               <label>
                  <input type="checkbox" name='text' />
                  PRIMARY 1
              </label>
               <label>
                  <input type="checkbox" name='text' />
                  PRIMARY 2
              </label>
               <label>
                  <input type="checkbox" name='text' />
                  PRIMARY 3
              </label>
               <label>
                  <input type="checkbox" name='text' />
                  PRIMARY 4
              </label>
               <label>
                  <input type="checkbox" name='text' />
                  PRIMARY 5
              </label>
               <label>
                  <input type="checkbox" name='text' />
                  JSS 1
              </label>
               <label>
                  <input type="checkbox" name='text' />
                  JSS 2
              </label>
               <label>
                  <input type="checkbox" name='text' />
                  JSS 3
              </label>
               <label>
                  <input type="checkbox" name='text' />
                  SSS 1
              </label>
               <label>
                  <input type="checkbox" name='text' />
                  SSS 2
              </label>
               <label>
                  <input type="checkbox" name='text' />
                  SSS 3
              </label> 
              <hr />
                 <label htmlFor='passport'>
                  <input type="file" id='passport' onChange={handleFileChange} accept='image/*' name='text' />
              </label> 

                    {passport && (
                <p>Selected file: {passport.name}</p>
                    )}
                    <hr />
                    <h3>Additional Information</h3>
                    <label>Any medical condition?</label>
                    <textarea name="message" id="message" rows="5" cols="40" placeholder='Write your reports here' ></textarea>
                      
                      <button type='button' onClick={createStudent} >Submit here</button>

        </div>
    </div>
  )
}

export default Form;
