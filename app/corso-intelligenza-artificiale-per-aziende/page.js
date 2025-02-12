import Header from '../../components/Header'
import LoopingText from '../../components/LoopingText'

export const metadata = {  
  title: "Corso Intelligenza Artificiale per aziende - The Prompt Master",
  description: "L'intelligenza artificiale come non te l'aspettavi",
  metadataBase: new URL('https://www.thepromptmaster.it'),
  alternates: {
    canonical: '/corso-intelligenza-artificiale-per-aziende',
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
        </div>
        <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1HUhCHoC0EIDGOOpHNxLltORdirRbjdqRJslx0hCJxyrxlUEE9ck3-7npwTAQHY70CiqXgmUTX?gv=true" width="100%" height="2000px"></iframe>
      </div>
    </>
  );
}