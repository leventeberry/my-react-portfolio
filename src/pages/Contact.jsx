import React, { useRef, useState } from 'react';

export default function Contact() {
  const fnameRef = useRef(null);
  const lnameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [errors, setErrors] = useState({
    fname: '',
    lname: '',
    email: '',
    message: ''
  });

  const handleBlur = (field) => {
    const value = {
      fname: fnameRef.current.value.trim(),
      lname: lnameRef.current.value.trim(),
      email: emailRef.current.value.trim(),
      message: messageRef.current.value.trim()
    };

    let errorMessage = '';
    if (value[field] === '') {
      errorMessage = 'This field is required';
    } else if (field === 'email' && !validateEmail(value.email)) {
      errorMessage = 'Invalid email address';
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: errorMessage
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="mt-5 container">
      <h3 className="text-center page-title">Contact Page</h3>
      <form className="d-flex flex-column mt-5" action="#" id="contact-form">
        <div className="d-flex flex-wrap row">
          <div className="d-flex flex-column p-2 col-6">
            <label htmlFor="fname">First Name:</label>
            <input
              type="text"
              name="fname"
              id="fname"
              ref={fnameRef}
              onBlur={() => handleBlur('fname')}
            />
            {errors.fname && <div>{errors.fname}</div>}
          </div>
          <div className="d-flex flex-column p-2 col-6">
            <label htmlFor="lname">Last Name:</label>
            <input
              type="text"
              name="lname"
              id="lname"
              ref={lnameRef}
              onBlur={() => handleBlur('lname')}
            />
            {errors.lname && <div>{errors.lname}</div>}
          </div>
        </div>
        <div className="d-flex flex-column p-2 row">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            ref={emailRef}
            onBlur={() => handleBlur('email')}
          />
          {errors.email && <div>{errors.email}</div>}
        </div>
        <div className="d-flex flex-column p-2 row">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            cols="50"
            rows="5"
            ref={messageRef}
            onBlur={() => handleBlur('message')}
          ></textarea>
          {errors.message && <div>{errors.message}</div>}
        </div>
        <div className="d-flex flex-column align-items-center">
          <button type="submit" className="btn btn-primary p-2 col-3 mt-2">Submit</button>
        </div>
      </form>
    </div>
  );
}
