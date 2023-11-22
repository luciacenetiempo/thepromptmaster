import React from 'react';
import Mailchimp from "react-mailchimp-form"
import NewsletterForm from './NewsletterForm';

const NewsletterStrip = () => {
  return (
    <div className="section section--newsletter">
    <div className='newsletter-strip newsletter-strip--title'>
        <div className='newsletter-strip__col'>
          <img src='/logo-the-prompt-master.png' />
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
      <NewsletterForm />
    </div>
  </div>
  );
};

export default NewsletterStrip;
