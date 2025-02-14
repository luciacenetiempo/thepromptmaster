import Image from "next/image";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import PostTileBig from "../components/PostTileBig";
import LoopingText from "../components/LoopingText";
import Carousel from "../components/Carousel";
import Chisono from "../components/Chisono";
import React from "react";

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
    <Header color='light' />
        <HeroBanner
          src='/images/bg-purple.webp'
          alt=''
          title=''
          subtitle=''
          cta=''
          link=''
        /> 

      <div className="strip"> 
        <LoopingText
          text="L'AI non ti ruberà il lavoro se impari ad usarla!"
          size='big'
          velocity={0.08}
          color='dark'
        />
      </div>
      <Chisono />
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
