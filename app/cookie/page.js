import Header from '../../components/Header'
import LoopingText from '../../components/LoopingText'

export const metadata = {  
  title: "Cookies Policy - The Prompt Master",
  description: "L'intelligenza artificiale come non te l'aspettavi",
  metadataBase: new URL('https://www.thepromptmaster.it'),
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    images: '/og-image.png',
  },
  keywords: ['ChatGPT', 'Midjourney', 'Chat GPT', 'Prompt', 'Prompt Engineering', 'Prompt Design', 'Prompt ChatGPT', 'Intelligenza Artificiale'],
  authors: [{ name: 'Lucia Cenetiempo', url: 'https://www.thepromptmaster.it' }],
}

export default function Page() {
  return (
    <>
      <Header color='dark' /> 
      <div className='headMargin'>
        <div className="strip">
          <LoopingText
            text='THE PROMPT MASTER'
            size='big'
            velocity={0.08}
            color='dark'
          />
        </div>
        <div className="strip">
          <LoopingText
            text={`L'INTELLIGENZA ARTIFICIALE COME NON LA IMMAGINAVI`}
            size='small'
            velocity={0.08}
            color='dark'
          />
        </div>
      </div>

      <div className='section-content'>
        <div className='content rich-text-block rich-text-block--newsletter'>
          <h1>Cookie</h1>
          <h3>Finalità dell'Utilizzo delle Tecnologie</h3>
          <p>Tutti i Cookie e tecnologie simili presenti sul sito web di The Prompt Master sono utilizzati esclusivamente per scopi di analisi e ricerca dei dati degli utenti. Queste tecnologie ci consentono di migliorare la comprensione delle prestazioni dei nostri servizi e dei plugin in diverse località.</p>
          <p>Noi o i nostri fornitori di servizi utilizziamo queste tecnologie per scopi di ricerca e miglioramento dei nostri prodotti, delle funzionalità e dei servizi. Questo include l'analisi delle interazioni degli utenti mentre navigano nei nostri siti o accedono a LinkedIn da altre piattaforme web, applicazioni o dispositivi. Inoltre, utilizziamo queste tecnologie per valutare e misurare l'efficacia degli annunci pubblicitari o dei contenuti promozionali all'interno e all'esterno di The Prompt Master, nonché per rilevare se gli utenti interagiscono con i nostri contenuti o le nostre email, al fine di fornire analisi basate su tali interazioni.</p>
          <p>Inoltre, utilizziamo queste tecnologie per fornire informazioni aggregate ai nostri clienti o partner in relazione ai nostri servizi.</p>
          <p>Se sei un utente di The Prompt Master e hai effettuato l'accesso al tuo account su un browser, tieni presente che potremmo continuare a registrare le tue interazioni con i nostri servizi su quel browser fino alla scadenza dei cookie, allo scopo di generare analisi sull'utilizzo dei nostri servizi. Queste analisi possono essere condivise in forma aggregata con i nostri clienti.</p>
          <p></p>
          <p></p>
          <p></p>
          <h3>Informazioni sui Cookie</h3>
        </div>
        <div className='content-wide rich-text-block'>  
          <table className="table-auto border-collapse w-full">
            <thead>
              <tr>
                <th className="border px-4 py-4">Nome</th>
                <th className="border px-4 py-4">Dominio</th>
                <th className="border px-4 py-4">Finalità</th>
                <th className="border px-4 py-4">Scadenza</th>
                <th className="border px-4 py-4">Fornitore</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-4">ajs_user_id</td>
                <td className="border px-4 py-4">segment.com</td>
                <td className="border px-4 py-4">Questo Cookie viene impostato da Segment per monitorare l’utilizzo dei visitatori, gli eventi, il marketing target e anche per misurare le prestazioni e la stabilità dell’applicazione.</td>
                <td className="border px-4 py-4">Mai</td>
                <td className="border px-4 py-4">Segment</td>
              </tr>
              <tr>
                <td className="border px-4 py-4">ajs_anonymous_id</td>
                <td className="border px-4 py-4">segment.com</td>
                <td className="border px-4 py-4">Questo Cookie è impostato da Segment per contare il numero di persone che visitano un determinato sito monitorando se lo hanno già visitato in precedenza.</td>
                <td className="border px-4 py-4">1 Anno</td>
                <td className="border px-4 py-4">Segment</td>
              </tr>
              <tr>
                <td className="border px-4 py-4">_ga</td>
                <td className="border px-4 py-4">google.com</td>
                <td className="border px-4 py-4">Google Analytics imposta questo Cookie per calcolare i dati di visitatori, le sessioni e monitorare l’utilizzo del sito per il report di analisi del sito. Il cookie memorizza le informazioni in modo anonimo ed assegna un numero generato in maniera casuale per riconoscere i visitatori.</td>
                <td className="border px-4 py-4">399 Giorni</td>
                <td className="border px-4 py-4">Google</td>
              </tr>
              <tr>
                <td className="border px-4 py-4">_ga_*</td>
                <td className="border px-4 py-4">google.com</td>
                <td className="border px-4 py-4">Google Analytics imposta questo Cookie per memorizzare e contare le visualizzazioni di una pagina Web.</td>
                <td className="border px-4 py-4">399 Giorni</td>
                <td className="border px-4 py-4">Google</td>
              </tr>
              <tr>
                <td className="border px-4 py-4">_fbp</td>
                <td className="border px-4 py-4">facebook.com</td>
                <td className="border px-4 py-4">Facebook imposta questo Cookie per visualizzare annunci pubblicitari su Facebook o su una piattaforma digitale alimentata dalla pubblicità di Facebook dopo aver visitato il sito web.</td>
                <td className="border px-4 py-4">3 Mesi</td>
                <td className="border px-4 py-4">Meta</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='content rich-text-block rich-text-block--newsletter'>
          <p></p>
          <p></p>
          <p></p>
          <h3>Informazioni Aggiuntive</h3>
          <p>Terze parti, come i nostri clienti, partner e fornitori di servizi, potrebbero utilizzare i cookie in relazione ai nostri servizi.</p>

          <p>La piattaforma di The Prompt Master, il sito di The Prompt Master e tutti i nostri servizi considerano i cookie elencati nella tabella precedente come essenziali per il funzionamento del nostro sito e per consentire agli utenti di ricevere un servizio conforme alle loro finalità. All'utente verrà richiesto di esprimere il proprio consenso all'utilizzo dei cookie elencati al momento dell'accesso alla nostra piattaforma. L'utente non potrà accedere alle funzionalità del sito se non accetta l'uso dei suddetti cookie.</p>

          <p>The Prompt Master fornisce informazioni dettagliate sull'utilizzo dei cookie in questo documento. Per ulteriori domande o chiarimenti, ti invitiamo a contattarci tramite email all'indirizzo: <a href="mailto:info@thepromptmaster.it">info@thepromptmaster.it</a>.</p>

          <p>La maggior parte dei browser offre agli utenti la possibilità di gestire i cookie attraverso le impostazioni del browser, permettendo loro di modificare il proprio consenso all'utilizzo dei cookie e di controllare o eliminare i cookie, compresi quelli di The Prompt Master. Per ulteriori informazioni sul controllo dei cookie tramite il tuo browser, ti invitiamo a consultare la documentazione fornita dal produttore del tuo browser.</p>
        </div>
      </div>
    </>
  );
}