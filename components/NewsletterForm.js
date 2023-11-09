import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const NewsletterForm = () => {
  return (
    <MailchimpSubscribe 
      url='https://gmail.us21.list-manage.com/subscribe/post?u=57d0b7cc7d270bd62df84fd67&amp;id=9fae1ac48c&amp;f_id=00eaebe6f0' 
      fields={[
        {
          name: "EMAIL",
          placeholder: "Email",
          type: "email",
          required: true,
        },
      ]}  
    />
    
  );
};

export default NewsletterForm;
