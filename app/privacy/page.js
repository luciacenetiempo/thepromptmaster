import Header from '../../components/Header'
import LoopingText from '../../components/LoopingText'

export const metadata = {  
  title: "Privacy Policy - The Prompt Master",
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
        <h1>Privacy</h1>
        <p>The Prompt Master si impegna quotidianamente a realizzare la sua missione, che consiste nel connettere i talenti più qualificati nel settore tech con le aziende che cercano professionisti per ruoli direttamente disponibili sulla nostra piattaforma. Per raggiungere questo obiettivo, è necessario raccogliere e trattare una serie di dati forniti dagli utenti in modo completamente trasparente. Questo processo ha lo scopo di assistere gli utenti nel percorso formativo e professionale. Su questa pagina, troverete tutte le informazioni relative alla privacy dei vostri dati, compreso il titolare del trattamento, i vostri diritti in merito alle informazioni fornite e le finalità del trattamento dei dati. The Prompt Master si conforma rigorosamente alla normativa vigente, applicando in modo analitico il GDPR per garantire la massima chiarezza e sicurezza per gli utenti.</p>
        <h3><strong>Titolare del trattamento dei dati</strong></h3>
        <p><strong>Indirizzo email del titolare:</strong> <a href="mailto:info@thepromptmaster.it">info@thepromptmaster.it</a></p>
        <h3><strong>Tipologia di dati raccolti dalla piattaforma</strong></h3>
        <p>La nostra piattaforma raccoglie in modo autonomo o tramite terze parti una serie di dati personali, tra cui nome, cognome, indirizzo email dell'utente, dati comunicati durante l'utilizzo del servizio, strumenti di tracciamento, dati di utilizzo, dati di fatturazione, informazioni sul dispositivo, numero di telefono, indirizzo fisico, indirizzo IP, visualizzazioni di pagine, log del dispositivo, informazioni sui sistemi operativi, cronologia di navigazione, dettagli sul browser, clic, eventi di interazione, interazioni durante lo scorrimento delle pagine, e dati relativi a eventuali crash.</p>
        <p>A meno che non sia specificato diversamente, tutti i dati richiesti dalla nostra piattaforma sono obbligatori. Nel caso in cui un utente scelga di non fornire tali dati, potrebbe non essere possibile usufruire dei servizi offerti dalla piattaforma. Qualora alcuni dati siano designati come facoltativi, gli utenti possono decidere di non fornirli senza che ciò influisca sulla disponibilità o sul funzionamento dei servizi. Gli utenti che abbiano dubbi sulla natura obbligatoria di alcuni dati sono incoraggiati a contattare il Titolare. L'eventuale uso di cookie o di altri strumenti di tracciamento da parte della piattaforma o dei fornitori di servizi terzi utilizzati ha lo scopo di fornire i servizi essenziali richiesti dall'utente, oltre a qualsiasi ulteriore finalità descritta nel presente documento e nella Cookie Policy, se disponibile.</p>
        <p>L'utente è responsabile dei dati personali di terzi ottenuti, pubblicati o condivisi attraverso il nostro sito web, e garantisce di avere il diritto di comunicarli o diffonderli, sollevando il Titolare da qualsiasi responsabilità verso terzi.</p>
        <h3><strong>Modalità del trattamento dei dati</strong></h3>
        <h4></h4>
        <h4><strong>Procedure di Trattamento dei Dati</strong></h4>
        <p>Per garantire la sicurezza dei dati personali, il Titolare adotta adeguate misure volte a prevenire l'accesso, la divulgazione, la modifica o la distruzione non autorizzati dei Dati Personali. Il trattamento dei dati avviene attraverso strumenti informatici e telematici, compresi processi automatizzati, utilizzando metodologie organizzative e logiche direttamente connesse alle finalità stabilite. Oltre al Titolare, in determinate situazioni, potrebbero accedere ai Dati altre parti coinvolte nell'organizzazione di questa piattaforma, come personale amministrativo, commerciale, marketing, legali o amministratori di sistema. Inoltre, potrebbero essere coinvolti soggetti esterni, come fornitori di servizi tecnici di terze parti, fornitori di servizi di hosting, aziende informatiche o agenzie di comunicazione. Tali soggetti potrebbero essere designati, se necessario, come Responsabili del Trattamento da parte del Titolare. L'elenco aggiornato dei Responsabili del Trattamento è sempre disponibile su richiesta presso il Titolare.</p>
        <h4><strong>Base Legale del Trattamento</strong></h4>
        <p>Il Titolare tratta i dati personali dell'utente in conformità alle seguenti basi giuridiche:</p>
        <ul>
        <li>L'utente ha liberamente prestato il proprio consenso per una o più finalità specifiche di trattamento.</li>
        <li>Il trattamento è necessario per l'esecuzione di un contratto con l'utente o per l'adozione di misure precontrattuali richieste dall'utente.</li>
        <li>Il trattamento è richiesto per adempiere a un obbligo legale al quale il Titolare è soggetto.</li>
        <li>Il trattamento è necessario per l'esecuzione di un compito di interesse pubblico o nell'esercizio di pubblici poteri conferiti al Titolare.</li>
        <li>Il trattamento è necessario per il perseguimento del legittimo interesse del Titolare.</li>
        </ul>
        <p>È sempre possibile richiedere al Titolare ulteriori dettagli sulla base giuridica specifica di ciascun trattamento e, in particolare, se il trattamento si basa sulla legge, su un contratto o è necessario per concludere un contratto.</p>
        <h4><strong>Luogo del Trattamento dei Dati</strong></h4>
        <p>I Dati Personali dell'Utente sono trattati presso le sedi operative del Titolare e in ogni altro luogo in cui le parti coinvolte nel trattamento siano localizzate. Per ulteriori dettagli, è possibile contattare il Titolare del Trattamento.</p>
        <p>È possibile che i Dati Personali dell'Utente vengano trasferiti in un paese al di fuori dell'Unione Europea o in un'organizzazione internazionale soggetta al diritto internazionale pubblico o costituita da due o più paesi. In tal caso, l'Utente ha il diritto di ottenere ulteriori informazioni sulla base giuridica di tale trasferimento, nonché sulle misure di sicurezza adottate dal Titolare per proteggere i Dati Personali.</p>
        <p>L'Utente può verificare se si verifichi uno dei trasferimenti appena descritti consultando la sezione relativa ai dettagli sul trattamento dei Dati Personali in questo documento o contattando il Titolare ai recapiti forniti in apertura.</p>
        <h4></h4>
        <h4><strong>Periodo di Conservazione dei Dati</strong></h4>
        <p>I Dati Personali sono trattati e conservati per il tempo necessario rispetto alle finalità per cui sono stati raccolti. Ecco i dettagli:</p>
        <ul>
        <li>I Dati Personali raccolti per scopi legati all'esecuzione di un contratto tra il Titolare e l'Utente saranno conservati fino a quando l'esecuzione di tale contratto sarà completata.</li>
        <li>I Dati Personali raccolti per finalità legate all'interesse legittimo del Titolare saranno conservati fino al soddisfacimento di tale interesse. Per ulteriori dettagli sull'interesse legittimo perseguito dal Titolare, si può fare riferimento alle relative sezioni di questo documento o contattare il Titolare.</li>
        <li>Nel caso in cui il trattamento sia basato sul consenso dell'Utente, il Titolare può conservare i Dati Personali per un periodo più lungo fino a quando il consenso viene revocato. Inoltre, il Titolare potrebbe essere obbligato a conservare i Dati Personali per un periodo più lungo per ottemperare a obblighi di legge o su richiesta di un'autorità.</li>
        </ul>
        <p>Al termine del periodo di conservazione, i Dati Personali saranno cancellati. Pertanto, dopo tale periodo, non sarà più possibile esercitare il diritto di accesso, cancellazione, rettificazione o il diritto alla portabilità dei Dati.</p>
        <h3></h3>
        <h3><strong>Finalità del Trattamento dei Dati Personali</strong></h3>
        <p>I Dati dell'Utente sono raccolti per diverse finalità, tra cui:</p>
        <ul>
        <li>Consentire al Titolare di fornire il Servizio.</li>
        <li>Adempiere agli obblighi di legge.</li>
        <li>Rispondere a richieste o azioni esecutive.</li>
        <li>Tutelare i propri diritti ed interessi, nonché quelli degli Utenti o di terze parti.</li>
        <li>Individuare eventuali attività dolose o fraudolente.</li>
        </ul>
        <p>Inoltre, i Dati Personali possono essere utilizzati per:</p>
        <ul>
        <li>Contattare l'Utente.</li>
        <li>Consentire la registrazione e l'autenticazione degli Utenti su questa piattaforma.</li>
        <li>Gestire le richieste di supporto.</li>
        <li>Gestire l'infrastruttura backend.</li>
        <li>Effettuare il trasferimento di Dati al di fuori dell'Unione Europea, se necessario.</li>
        <li>Raccogliere le preferenze relative alla privacy.</li>
        <li>Gestire i database degli Utenti.</li>
        <li>Effettuare la registrazione e l'autenticazione degli Utenti.</li>
        <li>Collegare i Dati.</li>
        <li>Effettuare test di performance di contenuti e funzionalità.</li>
        <li>Creare e gestire questo Sito Web.</li>
        </ul>
        <p>Tutte queste finalità contribuiscono a garantire un servizio efficiente e sicuro agli Utenti, nonché a rispettare gli obblighi normativi e a proteggere i diritti e gli interessi di tutte le parti coinvolte.</p>
        <h3><strong>Informazioni Dettagliate sul Trattamento dei Dati Personali</strong></h3>
        <h4><strong>Registrazione ed Autenticazione</strong></h4>
        <p>La registrazione o l'autenticazione consentono a questa piattaforma di identificare gli Utenti e fornire loro accesso a servizi dedicati. A seconda delle circostanze, la registrazione e l'autenticazione possono essere fornite in collaborazione con terze parti. In tal caso, questa piattaforma potrebbe accedere a alcuni Dati conservati dai servizi terzi utilizzati per la registrazione o l'autenticazione. Alcuni di questi servizi potrebbero anche raccogliere Dati Personali per scopi di targeting e profilazione. Per ulteriori informazioni, si prega di fare riferimento alla descrizione di ciascun servizio di seguito.</p>
        <h4><strong>Google:</strong></h4>
        <p>Google LLC è un'azienda informatica statunitense che offre servizi online, con sede principale a Mountain View, California, nel cosiddetto Googleplex.</p>
        <ul>
        <li>Dati personali trattati: Dati comunicati durante l'utilizzo del servizio, forniti dall'Utente previo consenso.</li>
        <li>Base giuridica per il trasferimento dei dati: Consenso.</li>
        <li>Luogo del trattamento: Stati Uniti d'America – <a href="https://policies.google.com/privacy?hl=it&amp;fg=1">Privacy Policy di Google</a></li>
        </ul>
        <h4><strong>LinkedIn:</strong></h4>
        <p>LinkedIn è un servizio web di rete sociale utilizzato principalmente per lo sviluppo di contatti professionali e la condivisione di contenuti relativi al mondo del lavoro.</p>
        <ul>
        <li>Dati personali trattati: Dati comunicati durante l'utilizzo del servizio, forniti dall'Utente previo consenso.</li>
        <li>Base giuridica per il trasferimento dei dati: Consenso.</li>
        <li>Luogo del trattamento: Stati Uniti d'America – <a href="https://www.linkedin.com/mypreferences/d/categories/privacy">Privacy Policy di LinkedIn</a></li>
        </ul>
        <h4><strong>Collegamento Dati</strong></h4>
        <p>Questo tipo di servizio consente al Titolare di condividere Dati con servizi di terze parti menzionati in questa privacy policy. Ciò implica che i Dati fluiscono attraverso questi servizi e potrebbero essere conservati da essi.</p>
        <ul>
        <li>Base giuridica per il trasferimento dei dati: Consenso.</li>
        <li>Luogo del trattamento: Stati Uniti d'America – <a href="https://aws.amazon.com/it/privacy/?nc1=f_pr">Privacy Policy del servizio di collegamento dati</a></li>
        </ul>
        <h4><strong>Segment:</strong></h4>
        <p>Segment è una Customer Data Platform (CDP) che semplifica la raccolta e l'utilizzo dei dati degli Utenti delle proprietà digitali (siti Web, app, ecc.).</p>
        <ul>
        <li>Dati personali trattati: Dati comunicati durante l'utilizzo del servizio, forniti dall'Utente previo consenso.</li>
        <li>Base giuridica per il trasferimento dei dati: Consenso.</li>
        <li>Luogo del trattamento: Stati Uniti d'America – <a href="https://www.twilio.com/en-us/legal/privacy">Privacy Policy di Segment</a></li>
        </ul>
        <h4><strong>Meta (Meta Ads, Meta Events Manager):</strong></h4>
        <p>Meta Platforms, Inc., nota anche come Meta, è un'impresa statunitense che controlla i servizi di rete sociale Facebook, Instagram, WhatsApp, Messenger e sviluppa visori di realtà virtuale Oculus Rift.</p>
        <ul>
        <li>Dati personali trattati: Dati comunicati durante l'utilizzo del servizio, forniti dall'Utente previo consenso.</li>
        <li>Base giuridica per il trasferimento dei dati: Consenso.</li>
        <li>Luogo del trattamento: Stati Uniti d'America – <a href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&amp;entry=0">Privacy Policy di Meta</a></li>
        </ul>
        <h4><strong>Google Analytics:</strong></h4>
        <p>Google Analytics è un servizio gratuito di web analytics fornito da Google utilizzato per analizzare statistiche dettagliate sui visitatori di un sito Web.</p>
        <ul>
        <li>Dati personali trattati: Dati comunicati durante l'utilizzo del servizio, forniti dall'Utente previo consenso.</li>
        <li>Base giuridica per il trasferimento dei dati: Consenso.</li>
        <li>Luogo del trattamento: Stati Uniti d'America – <a href="https://policies.google.com/privacy?hl=it&amp;fg=1">Privacy Policy di Google Analytics</a></li>
        </ul>
        <h4><strong>Trasferimento dei Dati all'interno e all'esterno dell'UE</strong></h4>
        <p>Il Titolare può trasferire i Dati Personali raccolti all'interno dell'UE verso paesi terzi (ovvero, paesi non appartenenti all'UE) solo in conformità a una specifica base giuridica. Tali trasferimenti di Dati sono effettuati secondo una delle basi giuridiche descritte di seguito. L'Utente può richiedere informazioni al Titolare in merito alla specifica base giuridica applicabile a ciascun servizio.</p>
        <h4><strong>Trasferimento di Dati verso paesi che garantiscono standard europei</strong></h4>
        <p>Quando questa è la base giuridica, il trasferimento di Dati Personali dalla UE verso paesi terzi avviene in base a una decisione d'adeguatezza adottata dalla Commissione Europea. Queste decisioni d'adeguatezza stabiliscono che il paese terzo in questione garantisce un livello di protezione dei Dati Personali comparabile a quello previsto dalla legislazione europea in materia di protezione dei Dati Personali. L'Utente può consultare l'elenco aggiornato delle decisioni d'adeguatezza sul sito web della Commissione Europea.</p>
        <p>Dati Personali trattati: varie tipologie di Dati.</p>
        <p>Categoria di informazioni personali raccolte ai sensi del CCPA: identificatori.</p>
        <h4><strong>Gestione delle Richieste di Aiuto e Contatto</strong></h4>
        <p>Questo tipo di servizi consente a questa piattaforma di gestire le richieste di supporto e cont</p>
        <p>atto inviate tramite email o altri strumenti. I Dati Personali trattati dipendono dalle informazioni fornite dall'Utente nei messaggi e dallo strumento utilizzato per la comunicazione (ad esempio, l'indirizzo email).</p>
        <h3><strong>Diritti dell'Utente</strong></h3>
        <p>Gli Utenti possono esercitare determinati diritti con riferimento ai loro Dati Personali trattati dal Titolare. In particolare, nei limiti previsti dalla legge, l'Utente ha il diritto di:</p>
        <ul>
        <li><strong>Revocare il consenso in qualsiasi momento:</strong> L'Utente può revocare il consenso al trattamento dei propri Dati Personali precedentemente espresso.</li>
        <li><strong>Opporsi al trattamento dei propri Dati:</strong> L'Utente può opporsi al trattamento dei propri Dati quando esso avviene su una base giuridica diversa dal consenso. Ulteriori dettagli sul diritto di opposizione sono indicati nella sezione sottostante.</li>
        <li><strong>Accedere ai propri Dati:</strong> L'Utente ha il diritto di ottenere informazioni sui Dati Personali trattati dal Titolare, su determinati aspetti del trattamento ed a ricevere una copia dei Dati trattati.</li>
        <li><strong>Verificare e chiedere la rettificazione:</strong> L'Utente può verificare la correttezza dei propri Dati e richiederne l'aggiornamento o la correzione.</li>
        <li><strong>Ottenere la limitazione del trattamento:</strong> L'Utente può richiedere la limitazione del trattamento dei propri Dati. In tal caso, il Titolare non tratterà i Dati per alcun altro scopo se non la loro conservazione.</li>
        <li><strong>Ottenere la cancellazione o rimozione dei propri Dati Personali:</strong> L'Utente può richiedere la cancellazione dei propri Dati da parte del Titolare.</li>
        <li><strong>Ricevere i propri Dati o farli trasferire ad altro titolare:</strong> L'Utente ha il diritto di ricevere i propri Dati in un formato strutturato, di uso comune e leggibile da dispositivo automatico e, ove tecnicamente fattibile, di ottenerne il trasferimento senza ostacoli ad un altro titolare.</li>
        <li><strong>Proporre reclamo:</strong> L'Utente può proporre un reclamo all'autorità di controllo della protezione dei dati personali competente o agire in sede giudiziale.</li>
        </ul>
        <p>Per esercitare questi diritti, gli Utenti possono contattare il Titolare utilizzando i dettagli di contatto forniti in questo documento. Le richieste sono inviate gratuitamente e trattate dal Titolare nel più breve tempo possibile, in genere entro un mese.</p>
        <h4><strong>Dettagli sul diritto di opposizione</strong></h4>
        <p>Gli Utenti hanno il diritto di opporsi al trattamento dei loro Dati Personali quando i dati sono trattati nell'interesse pubblico, nell'esercizio di pubblici poteri di cui è investito il Titolare o per perseguire un interesse legittimo del Titolare. Inoltre, se i Dati Personali sono trattati per finalità di marketing diretto, gli Utenti possono opporsi in qualsiasi momento e gratuitamente, senza dover fornire alcuna motivazione. Se un Utente si oppone al trattamento dei propri Dati Personali per scopi di marketing diretto, i Dati Personali non saranno più utilizzati per tali scopi.</p>
        <h4><strong>Esercitare i propri diritti</strong></h4>
        <p>Per esercitare i propri diritti, gli Utenti possono inviare una richiesta al Titolare utilizzando i recapiti forniti in questo documento. Le richieste sono gratuite e saranno gestite dal Titolare nel più breve tempo possibile, di solito entro un mese. Il Titolare fornirà all'Utente tutte le informazioni richieste dalla legge e, se del caso, effettuerà eventuali correzioni, cancellazioni o limitazioni del trattamento dei Dati Personali. Il Titolare comunicherà a ciascuno dei destinatari a cui sono stati trasmessi i Dati Personali eventuali correzioni, cancellazioni o limitazioni del trattamento, a meno che ciò si riveli impossibile o richieda uno sforzo sproporzionato. Su richiesta dell'Utente, il Titolare fornirà informazioni sui destinatari specifici dei Dati Personali.</p>
        <h3><strong>Cookie Policy</strong></h3>
        <p>Questo Sito Web utilizza Strumenti di Tracciamento, e per ottenere ulteriori informazioni, l'Utente può fare riferimento alla cookie policy.</p>
        <h3><strong>Ulteriori Informazioni</strong></h3>
        <h4><strong>Difesa in Giudizio</strong></h4>
        <p>I Dati Personali dell'Utente possono essere utilizzati dal Titolare in giudizio o nelle fasi preparatorie alla sua eventuale instaurazione per difendersi da abusi nell'utilizzo di questa piattaforma o dei Servizi connessi da parte dell'Utente. L'Utente è consapevole che il Titolare potrebbe essere obbligato a rivelare i Dati Personali per ordine delle autorità pubbliche.</p>
        <h4><strong>Informazioni Aggiuntive</strong></h4>
        <p>Su richiesta dell'Utente, oltre alle informazioni contenute in questa privacy policy, questa piattaforma potrebbe fornire ulteriori informazioni e dettagli relativi a Servizi specifici o alla raccolta e al trattamento di Dati Personali. Ulteriori informazioni inerenti al trattamento dei Dati Personali possono essere richieste in qualsiasi momento contattando il Titolare del Trattamento utilizzando i dettagli di contatto forniti.</p>
        <h4><strong>Log di Sistema</strong></h4>
        <p>Per esigenze legate al funzionamento e alla manutenzione, questa piattaforma e i servizi terzi da essa utilizzati potrebbero raccogliere log di sistema, che sono file che registrano le interazioni e che possono contenere anche Dati Personali, come l'indirizzo IP dell'Utente.</p>
        <h4><strong>Do Not Track</strong></h4>
        <p>Questo sistema non supporta le richieste &quot;Do Not Track&quot;.</p>
        <h4><strong>Modifiche alla Privacy Policy</strong></h4>
        <p>Il Titolare del Trattamento si riserva il diritto di apportare modifiche alla presente privacy policy in qualsiasi momento, notificandolo agli Utenti su questa pagina e, se possibile, su questa piattaforma. Inoltre, se le modifiche riguardano trattamenti basati sul consenso dell'Utente, il Titolare otterrà nuovamente il consenso dell'Utente, se necessario. Gli Utenti sono invitati a consultare regolarmente questa pagina per verificare eventuali aggiornamenti.</p>
        </div>
      </div>
    </>
  );
}