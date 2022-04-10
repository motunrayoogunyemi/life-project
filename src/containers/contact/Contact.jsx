import React from 'react'
import telephone from "../../assets/telephone.jpg"
import "./contact.css"

const Contact = () => {
  return (
    <div className='er__contact'>
        <h1>CONTACT US</h1>
        <div className='contact-content'>
            <img src={telephone} alt='Telephone' />
            <div className='form-box'>
                <p>We want to hear from you! For more information on sponsorships, how to partner with us, please send us a message</p>
                <form>
                    <label>Name</label><input type='text' placeholder='Enter your full name' className='input-field'/>
                    <label>Email Address</label><input type='email' placeholder='Enter your email address' className='input-field'/>
                    <label>Message</label><textarea placeholder='Enter your email address' className='textarea-field' rows={8}/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact