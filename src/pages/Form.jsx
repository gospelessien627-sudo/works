import React, { useState } from 'react'
import {  Link } from 'react-router-dom'
import "./Form.css"
import { auth } from '../firebase'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../firebase'


const Form = () => {
  
const [status, setStatus] = useState("");
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [middleName, setMiddleName] = useState("")
const [phone, setPhone] = useState("");
const [address, setAddress] = useState("");
const [occupation, setOccupation] = useState("");
const [paretName, setParentName] = useState("");
const [residentialAddress, setResidentialAddress] = useState("");
const [dateob, setDateob] = useState("");


async function createStudent() {
  try {
    await setDoc(doc(db, "students", auth.currentUser.uid),
    {
      firstName,
      lastName,
      email,
      phone,
      address,
      middleName,
      occupation,
      paretName, 
      residentialAddress,
      dateob

    
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
            <h3>First Name: <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} className='pp'/> </h3>
            <h3>Last Name: <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className='pp'/></h3>
            <h3>Middle Name: <input type="text" value={middleName} onChange={(e) => setMiddleName(e.target.value)} className='pp'/></h3>
            <h3></h3>
            <label>
              <input  type="checkbox" name='text' />
              Male
            </label>
              <label>
              <input type="checkbox" name='text' />
              female
            </label>
            <h3>Date of birth :<input type="text" onChange={(e) => setDateob(e.target.value)} value={dateob} className='pp' /></h3>
            <h3>Phone Number :<input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className='pp'/></h3>
            <h3>Email address :<input type="text" onChange={(e) => setAddress(e.target.value)} value={email}  className='pp'/></h3>
            <h3>Residential Address :<input type="text" value={residentialAddress} onChange={(e) => setResidentialAddress(e.target.value)} className='pp'/></h3>
            <hr />
            <h1>Parent Name:<input type="text" value={paretName} onChange={(e) => setParentName(e.target.value)} className='pp'/></h1>
              <h3>Phone Number:<input type="text" value={phone} onChange={(e) => setOccupation(e.target.value)} className='pp'/></h3>
              <h3>Occupation:<input type="text" value={occupation} className='pp'/> </h3>
              <h3>Address:<input type="text"className='pp' onChange={(e) => setAddress(e.target.value)} value={address} /></h3>
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
