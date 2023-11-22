import React from 'react';
import Mailchimp from "react-mailchimp-form"

const NewsletterForm = () => {
  return (
      <Mailchimp
      className='field-newsletter'
        action="https://gmail.us21.list-manage.com/subscribe/post?u=57d0b7cc7d270bd62df84fd67&amp;id=9fae1ac48c&amp;f_id=00eaebe6f0"
        fields={[
          {
            name: "EMAIL",
            placeholder: "Inserisci il tuo indirizzo email!",
            type: "email",
            required: true,
          }
        ]}

        messages={{
          sending: "Attendi un secondo...",
          success: "Yeah! Benveuto tra i veri Prompt Heroes!",
          error: "Qualcosa è andato storto. Controlla l'indirizzo email.",
          empty: "Indirizzo email non valido. Sicuro della email inserita?",
          duplicate: "Sei già iscritto alla newsletter 💣",
          button: "Iscriviti!",
        }}
      />
  );
};

export default NewsletterForm;
