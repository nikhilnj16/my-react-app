import { useEffect, useState } from 'react';
import React from 'react';
import './header.css';


const Header = () => {
  const initialvalue = { username:"",registartion :"",email:"",password:"",subject:""};
  const [ formvalue, setFormValues,] = useState(initialvalue);
  const [ formErrors, setFormErrors,] = useState({});
  const [isSubmit, setIsSubmit] =useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);



  const handlechange = (e) =>{
    const { name , value } = e.target;
    setFormValues({...formvalue, [name]:value});
    console.log(formvalue);
  };
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormErrors(validate(formvalue));
    setIsSubmit(true);
  
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 1500); 
    }
  }, [formErrors, isSubmit]);





  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formvalue);
    }
  },[formErrors]);

  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "username is required";
    }
    if (!values.registration) {
      errors.registartion = "registrion no  is required";

    }
    if (!values.email) {
      errors.email = "email is required";

    }else if (!regex.test(values.email)){
      errors.email = "This is not a valid email";
    }
    if (!values.password) {
      errors.password = "password is required";
    }else if (values.password.length < 8){
      errors.password = "Password must be more than 8 characters";
    }
    else if (values.password.length > 15){
      errors.password = "Password cannot be more than 15 characters";
    }
    if (!values.subject) {
      errors.subject = "Subject is required";
    }
    return errors;

  };


  
  return (
    <div className='bg'>
      <img src='ai'></img>
    <div className='student__header section__padding' id="home">

      <div className='student_header-content'>
        <h1 className="gradient__text"> Welcome to SRM</h1>
        
        <div className='student_form-box'>
         
          
          
          <form onSubmit={handleSubmit}>
            <h2 >Attendance</h2>
            <div className="ui divisor"></div>
            <div className="ui_form">
              <div className='field'>
                <label>Username: </label>
                <input type="text" name="username" placeholder='username' value={formvalue.username} onChange={handlechange}></input>
              </div>
              <p>{formErrors.username} </p>
              <div className='field'>
                <label>Registration: </label>
                <input type="text" name="registration" placeholder='Registraion ' value={formvalue.registration} onChange={handlechange}></input>
              </div>
              <p>{formErrors.registartion} </p>
              <div className='field'>
                <label>Email: </label>
                <input type="email" name="email" placeholder='Email' value={formvalue.email} onChange={handlechange}></input>
              </div>
              <p>{formErrors.email} </p>
              <div className='field'>
                <label>Password: </label>
                <input type="password" name="password" placeholder='Password' value={formvalue.password} onChange={handlechange}></input>
              </div>
              <p>{formErrors.password} </p>
              <div className='field'>
                <label>Subject: </label>
                <input type="Text" name="subject" placeholder='Subject' value={formvalue.subject} onChange={handlechange}></input>
              </div>
              <p>{formErrors.subject} </p>
              <button className='fluid ui button blue'>Submit</button>
                <div>
                  {showSuccessMessage ? (
                    <div className='message_success'>Attendance submitted</div>
                  ):null}
                </div>

                

            
            
            </div>



              
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;
