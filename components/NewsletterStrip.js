import React from 'react';
import Mailchimp from "react-mailchimp-form"
import NewsletterForm from './NewsletterForm';
import NewsletterFormMailerlite from './NewsletterFormMailerlite';
import ECourseFormMailerlite from './ECourseFormMailerlite';

const NewsletterStrip = () => {
  return (
    <div className="section section--newsletter">
    <div className='newsletter-strip newsletter-strip--title'>
        <div className='newsletter-strip__col'>
          <img src='/logo-the-prompt-master.png' alt="logo the prompt master" />
        </div>
        <div className='newsletter-strip__col'>
          <h3>Resta al passo!</h3>
          <p>
            Non perderti le news, i nuovi tool di intelligenza artificiale e fantastici tips sul prompt design e prompt per ChatGPT, Bard e Midjourney.<br/>
            <strong>Iscriviti alla newsletter per restare al passo!</strong>
          </p>
        </div>
    </div>
    <div className='newsletter-strip newsletter-strip--newsletter'>
      <NewsletterFormMailerlite 
        listId='115595877754603214' 
        label='Inserisci il tuo indirizzo email!' 
        submit='Iscriviti!' 
        success=''
        error=''
      />
    </div>
  </div>
  );
};

export default NewsletterStrip;
