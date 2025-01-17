"use client"

import React, { useState, useEffect } from 'react';
import { redirect } from 'next/navigation'

const NewsletterFormSlide = ({listId, label, submit, success, error, speechName, slideLink}) => {
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);
  const [successMessage, setSuccessMessage] = useState(success.length > 1 ? success : 'Yeah! Benvenuto tra i veri Prompt Heroes!');
  const [errorMessage, setErrorMessage] = useState(error.length > 1 ? error : 'Qualcosa è andato storto. Controlla l\'indirizzo email.');
  async function onSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    let url = `https://assets.mailerlite.com/jsonp/863030/forms/${listId}/subscribe`;
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    })
 
    // Handle response if necessary
    const data = await response.json()
    if(data.success){
      redirect(slideLink)
      setError(false)
    } else { 
      setSuccess(false)
      setError(true)
    }
  }
 

  return (
      <form className="field-newsletter" onSubmit={onSubmit}>
        <input placeholder={label} name="fields[email]" type="email" />
        <input type="hidden" name="fields[speech]" value={speechName} />
          {/* <button type="submit">{submit}</button> */}
          <button type="submit">
            <svg className="w-5 h-5 text-primary-600 fill-current mr-0.5 | dark:text-grayDark-600" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M0 288L512 0l-64 480-176.2-75.5L208 512l-48-16V384l224-224-251 185L0 288z"></path>
            </svg>
          </button>
          {isSuccess ? (<div className="msg-alert success">{successMessage}</div>) : ('')}
          {isError ? (<div className="msg-alert error">{errorMessage}</div>) : ('')}
      </form>
  );
};

export default NewsletterFormSlide;
