import React, { useRef, useState } from 'react';

export default function Contact() {
  const fnameRef = useRef(null);
  const lnameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [formError, setFormError] = useState('');

  const checkFields = () => {
    const fname = fnameRef.current.value.trim();
    const lname = lnameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const message = messageRef.current.value.trim();

    if (fname === '' && lname === '' && email === '' && message === '') {
      setFormError('Please fill out the entire form before submitting!');
    } else {
      setFormError('');
    }
  };

  return (
    <div className="mt-5">
      <h1 className="text-center">Contact Page</h1>
      <form className="d-flex flex-column mt-5" action="#" id="contact-form">
        <div className="d-flex flex-wrap">
          <div className="d-flex flex-column p-2">
            <label htmlFor="fname">First Name:</label>
            <input
              type="text"
              name="fname"
              id="fname"
              ref={fnameRef}
              onBlur={checkFields}
            />
          </div>
          <div className="d-flex flex-column p-2">
            <label htmlFor="lname">Last Name:</label>
            <input
              type="text"
              name="lname"
              id="lname"
              ref={lnameRef}
              onBlur={checkFields}
            />
          </div>
        </div>
        <div className="d-flex flex-column p-2">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            ref={emailRef}
            onBlur={checkFields}
          />
        </div>
        <div className="d-flex flex-column p-2">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            cols="50"
            rows="5"
            ref={messageRef}
            onBlur={checkFields}
          ></textarea>
        </div>
        <div className="d-flex flex-column align-items-center">
          {formError && <div>{formError}</div>}
          <button type="submit" className="btn btn-primary p-2 col-3 mt-2">Submit</button>
        </div>
      </form>
    </div>
  );
}
