import React, { useState, useEffect } from 'react';

const NewsletterFormMailerlite = ({listId, label, submit, success, error, }) => {
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);
  const [successMessage, setSuccessMessage] = useState(success.length > 1 ? success : 'Yeah! Benvenuto tra i veri Prompt Heroes!');
  const [errorMessage, setErrorMessage] = useState(error.length > 1 ? error : 'Qualcosa è andato storto. Controlla l\'indirizzo email.');
  console.log(successMessage)
  console.log(errorMessage)
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
      setSuccess(true)
      setError(false)
    } else { 
      setSuccess(false)
      setError(true)
    }
  }
 

  return (
      <form className="field-newsletter" onSubmit={onSubmit}>
        <input placeholder={label} name="fields[email]" type="email" />
          <button type="submit">{submit}</button>
          {isSuccess ? (<div className="msg-alert success">{successMessage}</div>) : ('')}
          {isError ? (<div className="msg-alert error">{errorMessage}</div>) : ('')}
      </form>
  );
};

export default NewsletterFormMailerlite;
