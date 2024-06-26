import Image from "next/image";
import Header from "../components/Header";
import PostTileBig from "../components/PostTileBig";
import LoopingText from "../components/LoopingText";
import Carousel from "../components/Carousel";

import { getPostFromCategory } from '../lib/wordpress';

export const metadata = {  
  title: "The Prompt Master - ChatGPT, Midjourney, AI",
  description: "L'intelligenza artificiale come non te l'aspettavi",
  metadataBase: new URL('https://www.thepromptmaster.it'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: '/og-image.png',
  },
  keywords: ['ChatGPT', 'Midjourney', 'Chat GPT', 'Prompt', 'Prompt Engineering', 'Prompt Design', 'Prompt ChatGPT', 'Intelligenza Artificiale'],
  authors: [{ name: 'Lucia Cenetiempo', url: 'https://www.thepromptmaster.it' }],
}
export default async function Home() {
  const promptChatGPT = await getPostFromCategory(17);
  const promptEng = await getPostFromCategory(3);
  const chatgpt = await getPostFromCategory(15);
  const midjourney = await getPostFromCategory(16);
  const newsAI = await getPostFromCategory(1);
  return (
    <>
    <Header color='dark' />
      <div className='collection-list-wrapper paddingVertical fixedHeight headMargin'>
        {/* first block header */}
        <div className='roundedBox'>
          <Image
            priority
            src='/images/bg-home.webp'
            alt='Ti spiego come usare chatgpt al meglio con prompt efficaci.'
            className='roundedBox__img'
            fill
            sizes="(min-width: 808px) 80vh, 100vw"
            style={{
              objectFit: 'cover', // cover, contain, none
            }}
          />
          <div className='roundedBox__headline'>
            <span className="phrase"><span className='bullet'>&#8226;</span> Ciao, sono The Prompt Master <span className='icon'>👋</span></span>
            <h1>Ti spiego come usare chatgpt al meglio con prompt efficaci.</h1>
          </div>
          <div className='author author__white'>
            <Image
              priority
              src='/images/avatar.webp'
              alt='Lucia Cenetiempo - The Prompt Master'
              className='author__avatar'
              width={56}
              height={56}
            />
            <div className='author__info'>
              <span className='author__info__name'>Lucia Cenetiempo</span>
              <span className='author__info__rule'>The Prompt Master</span>
            </div>
          </div>
        </div>

        {/* block 2 col text */}
        <div className='sectionText'>
          <div className='sectionText__content'>
            <span className="phrase"><span className='bullet'>&#8226;</span> Cos'è The Prompt Master <span className='icon icon--noanimation'>🤯</span></span>
            <h2>Se ti stai chiedendo a cosa serve chatGPT, come usare chatgpt, cosa si può chiedere o cosa puoi fargli fare, sei nel posto giusto.</h2>
          </div>
        </div>
      </div>
      <div className="strip">
        <LoopingText
          text='IMPARA AD USARE CHATGPT'
          size='big'
          velocity={0.08}
          color='dark'
        />
      </div>     
      <div className="strip"> 
        <LoopingText
          text="Scopri come usare ChatGPT"
          size='small'
          velocity={0.08}
          color='dark'
        />
      </div>
      <Carousel list={chatgpt} title={'Come funiona ChatGPT?'} section={'ChatGPT'}/>
      <div className="strip">
        <LoopingText
          text='INTELLIGENZA ARTIFICIALE'
          size='big'
          velocity={0.08}
          color='dark'
        />
      </div>     
      <div className="strip"> 
        <LoopingText
          text="Cosa c'è di nuovo da sapere?"
          size='small'
          velocity={0.08}
          color='dark'
        />
      </div>
      <div className='collection-list-wrapper paddingVertical fixedHeight headMargin'>
        <div className='sectionBlog'>
          <div className='sectionBlog__col' role="list">
            {newsAI.slice(0,2).map((post, index) => (
              <PostTileBig post={post} key={index} isCategory={post._embedded['wp:term'][0][0]} role="listitem" />
            ))}
          </div>          
          <div className='sectionBlog__col'>
            <div className='sectionBlog__col__head'>
              <span className="phrase"><span className="icon">🤖</span> Intelligenza artificiale</span>
              <h2>Cosa c'è di nuovo da sapere?</h2>
            </div>
            <div role="list">
              {promptEng.slice(0,2).map((post, index) => (
                <PostTileBig post={post} key={index} isCategory={post._embedded['wp:term'][0][0]} role="listitem"/>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="strip">
        <LoopingText
          text='IMPARA AD USARE MIDJOURNEY'
          size='big'
          velocity={0.08}
          color='dark'
        />
      </div> 
      <div className="strip"> 
        <LoopingText
          text="Scopri come usare Midjourney"
          size='small'
          velocity={0.08}
          color='dark'
        />
      </div>
      <Carousel list={midjourney} title={'Genera immagini con MidJourney'} section={'Midjourney'}/>
    </>
  );
}
