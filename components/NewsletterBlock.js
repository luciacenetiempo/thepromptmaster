import React from 'react';
import NewsletterFormMailerlite from './NewsletterFormMailerlite';
import ECourseFormMailerlite from './ECourseFormMailerlite';

const NewsletterBlock = () => {
  return (
    <div className="section section--newsletter  section--newsletter--block paddingVertical">
      <div className='newsletterWrap'>
        <div className=''>
          <div className='newsletter-strip__col'>
            <span className="phrase"><span className='icon'>🍿</span> Newsletter</span>
            <h2>Resta al passo!<br/>Ricevi gli approfondimenti e le strategie più aggiornate.</h2>

            <NewsletterFormMailerlite 
              listId='115595877754603214' 
              label='Inserisci il tuo indirizzo email!' 
              submit='Iscriviti!' 
              success=''
              error=''
            />
          </div>
        </div>
      </div>
      <div className="bg-separator" style={{marginTop: '-23px'}}>
        <div className="bg-primary" style={{marginTop: '0px', height: '23px'}}></div>
        <div className="bg-primary" style={{marginTop: '1px', height: '22px'}}></div>
        <div className="bg-primary" style={{marginTop: '2px', height: '21px'}}></div>
        <div className="bg-primary" style={{marginTop: '3px', height: '20px'}}></div>
        <div className="bg-primary" style={{marginTop: '4px', height: '19px'}}></div>
        <div className="bg-primary" style={{marginTop: '5px', height: '18px'}}></div>
        <div className="bg-primary" style={{marginTop: '6px', height: '17px'}}></div>
        <div className="bg-primary" style={{marginTop: '7px', height: '16px'}}></div>
        <div className="bg-primary" style={{marginTop: '8px', height: '15px'}}></div>
        <div className="bg-primary" style={{marginTop: '9px', height: '14px'}}></div>
        <div className="bg-primary" style={{marginTop: '10px', height: '13px'}}></div>
        <div className="bg-primary" style={{marginTop: '11px', height: '12px'}}></div>
        <div className="bg-primary" style={{marginTop: '12px', height: '11px'}}></div>
        <div className="bg-primary" style={{marginTop: '13px', height: '10px'}}></div>
        <div className="bg-primary" style={{marginTop: '14px', height: '9px'}}></div>
        <div className="bg-primary" style={{marginTop: '15px', height: '8px'}}></div>
        <div className="bg-primary" style={{marginTop: '16px', height: '7px'}}></div>
      </div>
    </div>
  );
};

export default NewsletterBlock;
 