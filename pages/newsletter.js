import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Mailchimp from "react-mailchimp-form"

import styles from '@/styles/Newsletter.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Newsletter() {
  return (
    <>
      <Head>
        <title>The Prompt Master - Newsletter Italiana sull'intelligenza artificiale</title>
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <img className={styles.avatar} src="the_prompt_master.jpeg" />
          <h1>Scopri il Futuro dell'Intelligenza Artificiale</h1>
          <h2>Resta sempre informato con insights settimanali direttamente nella tua inbox.</h2>
        </header>

        <section className={styles.form}>
          <h2>Fai il passo in avanti. Iscriviti subito!</h2>
          <Mailchimp
            action="https://gmail.us21.list-manage.com/subscribe/post?u=57d0b7cc7d270bd62df84fd67&amp;id=9fae1ac48c&amp;f_id=00eaebe6f0"
            fields={[
              {
                name: "EMAIL",
                placeholder: "Inserisci qui il tuo indirizzo email!",
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
        </section>

        <section className={styles.benefits}>
          <h2>Ecco una piccola anteprima di quello che ti aspetta ogni settimana nella tua casella di posta:</h2>
          <ul>
            <li>
              <strong>📰 Approfondimenti e News:</strong><br />
              approfondimenti sulle notizie più importanti nel settore dell'AI, accompagnati da una selezione delle notizie più rilevanti della settimana da tutto il mondo.
            </li>
            <li>
              <strong>🛠️ Recensioni e suggerimenti sui tool AI:</strong><br />
              una recensione dettagliata su un tool AI che ho provato personalmente, oltre a una lista di altri 5 tool da esplorare, con link diretti per approfondire.
            </li>
            <li>
              <strong>🤖 Prompt per mettere il turbo: </strong><br />
              ogni settimana un nuovo prompt da provare per mettere il turbo alla tua produttività e imparare come comunicare sempre meglio con i ChatBot AI diventando un vero e proprio PROMPT HERO!
            </li>
            <li>
              <strong>🎨 Creatività con AI: </strong><br />
              ogni newsletter includerà un prompt creativo accompagnato da un'immagine generata tramite AI
            </li>
            <li className={styles.last}>
              <strong>🚀 Molto molto altro: </strong><br />
              scopri ogni settimana sempre di più sul mondo dell'AI per essere sul pezzo!
            </li>
          </ul>
        </section>

        <section className={styles.form_new}>
          <h2>Fai il passo in avanti. Iscriviti subito!</h2>
          <Mailchimp
            action="https://gmail.us21.list-manage.com/subscribe/post?u=57d0b7cc7d270bd62df84fd67&amp;id=9fae1ac48c&amp;f_id=00eaebe6f0"
            fields={[
              {
                name: "EMAIL",
                placeholder: "Inserisci qui il tuo indirizzo email!",
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
        </section>
      </main>
    </>
  )
}
