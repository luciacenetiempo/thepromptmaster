import React, { useState, useEffect } from 'react';

const NewsletterFormMailerlite = () => {

  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);

  async function onSubmit(event) {
    event.preventDefault()
 
    const formData = new FormData(event.target)
    const response = await fetch('https://assets.mailerlite.com/jsonp/863030/forms/115595877754603214/subscribe', {
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
        <input placeholder="Inserisci il tuo indirizzo email!" name="fields[email]" type="email" />
          <button type="submit">Iscriviti!</button>
          {isSuccess ? (<div className="msg-alert success">Yeah! Benveuto tra i veri Prompt Heroes!</div>) : ('')}
          {isError ? (<div className="msg-alert error">Qualcosa è andato storto. Controlla l'indirizzo email.</div>) : ('')}
      </form>
  );
};

export default NewsletterFormMailerlite;
