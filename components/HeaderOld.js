"use client"

import React, { useState } from 'react';
import Link from 'next/link';

const HeaderOld = ({ color }) => {
  const [opened, setOpened] = useState(false);
  const openMenu = async () => {
    setOpened(!opened)
  };


  return (
    <header className={`navbar w-nav navbar--${color}`}>
      <div className="block-navbar">
        <div className="nav nav--logo">
          <a href="/" className="brand w-nav-brand w--current" aria-label="home">
            <svg xmlns="http://www.w3.org/2000/svg" id="uuid-276052b2-2fc8-4a97-b8e4-993c0ddce8a3" viewBox="0 0 463.95 105">
              <g id="uuid-5a6d9eac-1cfc-4ee7-8f3c-ea4ac44a6cde-l">
                <path d="m8.86,105c-.59,0-1.07-.12-1.66-.36-1.78-.71-2.73-2.61-2.37-4.5l7.94-40.06-7.35.24c-1.66.12-3.32-.71-4.27-2.01-1.07-1.3-1.42-3.08-.95-4.62L14.07,3.79c.59-2.25,2.73-3.79,4.98-3.79h29.39c1.78,0,3.44.83,4.38,2.37.95,1.42,1.19,3.32.47,4.98l-13.98,32.71,8.18-.36c2.01-.12,3.91.95,4.86,2.73.95,1.78.83,3.91-.36,5.57L12.06,103.34c-.71,1.07-1.9,1.66-3.2,1.66Zm10.9-50.84l-7.82,39.58,34.72-48.12-16.24.59L47.73,5.81h-28.21L5.89,54.63l13.87-.47Z" />
                <path d="m78.4,44.74V12.51h-13.25v-7.66h36.18v7.66h-13.46v32.24h-9.47Z" />
                <path d="m105.33,44.74V4.84h9.52v15.93h21.62V4.84h9.52v39.9h-9.52v-16.48h-21.62v16.48h-9.52Z" />
                <path d="m152.45,44.74V4.84h33.77v7.55h-24.25v8.65h21.57v7.06h-21.57v9.09h24.36v7.55h-33.88Z" />
                <path d="m202.81,44.74V4.84h20.47c5.47,0,9.45,1.18,11.93,3.53,2.48,2.35,3.72,5.52,3.72,9.5,0,2.99-.65,5.45-1.94,7.36-1.3,1.92-3.11,3.34-5.45,4.27-2.34.93-5.09,1.4-8.26,1.4l-10.95-.06v13.9h-9.52Zm19.49-32.46h-9.96v11.82l9.96.05c2.44,0,4.23-.53,5.36-1.59,1.13-1.06,1.7-2.52,1.7-4.38,0-2.12-.65-3.63-1.94-4.54-1.3-.91-3-1.37-5.12-1.37Z" />
                <path d="m243.37,44.74V4.84h23.54c2.81,0,5.35.38,7.64,1.15,2.28.77,4.08,2.01,5.39,3.72,1.31,1.72,1.97,4.01,1.97,6.9,0,2.37-.63,4.44-1.89,6.21-1.26,1.77-3.06,2.95-5.39,3.53v.38c2.15.37,3.74,1.19,4.76,2.46,1.02,1.28,1.53,3.06,1.53,5.36v5.47c0,.77.03,1.54.08,2.33.05.79.26,1.58.63,2.38h-9.58c-.44-.91-.66-2.48-.66-4.71v-4.11c0-1.71-.41-3.05-1.23-4-.82-.95-2.44-1.42-4.84-1.42h-12.42v14.23h-9.52Zm9.52-21.13h12.1c2.74,0,4.63-.56,5.69-1.67,1.06-1.11,1.59-2.55,1.59-4.3,0-2.08-.67-3.53-2-4.35-1.33-.82-3.09-1.23-5.28-1.23h-12.1v11.55Z" />
                <path d="m307.13,45.24c-4.74,0-8.8-.85-12.18-2.55-3.38-1.7-5.96-4.08-7.75-7.14-1.79-3.07-2.68-6.66-2.68-10.78s.9-7.72,2.71-10.78c1.81-3.07,4.39-5.44,7.75-7.12,3.36-1.68,7.41-2.52,12.15-2.52s8.68.84,12.04,2.52c3.36,1.68,5.93,4.05,7.72,7.12,1.79,3.06,2.68,6.66,2.68,10.78s-.9,7.73-2.71,10.81c-1.81,3.08-4.38,5.46-7.72,7.14-3.34,1.68-7.34,2.52-12.01,2.52Zm0-7.55c3.87,0,6.97-1.1,9.31-3.31,2.33-2.21,3.5-5.41,3.5-9.61s-1.17-7.39-3.5-9.58c-2.34-2.19-5.44-3.28-9.31-3.28s-7.12,1.09-9.44,3.28c-2.32,2.19-3.48,5.38-3.48,9.58s1.17,7.44,3.5,9.63c2.33,2.19,5.47,3.28,9.41,3.28Z" />
                <path d="m334.28,44.74V4.84h14.29l9.85,28.3h.33l9.74-28.3h14.29v39.9h-8.87v-15.76l.11-14.61h-.44l-10.84,30.38h-8.37l-10.78-30.38h-.49l.16,14.72v15.65h-8.98Z" />
                <path d="m389.23,44.74V4.84h20.47c5.47,0,9.45,1.18,11.93,3.53s3.72,5.52,3.72,9.5c0,2.99-.65,5.45-1.94,7.36-1.3,1.92-3.11,3.34-5.45,4.27-2.34.93-5.09,1.4-8.26,1.4l-10.95-.06v13.9h-9.52Zm19.49-32.46h-9.96v11.82l9.96.05c2.44,0,4.23-.53,5.36-1.59,1.13-1.06,1.7-2.52,1.7-4.38,0-2.12-.65-3.63-1.94-4.54-1.3-.91-3-1.37-5.12-1.37Z" />
                <path d="m441.01,44.74V12.51h-13.25v-7.66h36.18v7.66h-13.46v32.24h-9.47Z" />
                <path d="m67.56,92.74v-39.9h14.29l9.85,28.3h.33l9.74-28.3h14.29v39.9h-8.87v-15.76l.11-14.61h-.44l-10.84,30.38h-8.37l-10.78-30.38h-.49l.16,14.72v15.65h-8.98Z" />
                <path d="m119.34,92.74l17.08-39.9h12.37l17.13,39.9h-10.34l-3.28-7.99h-19.43l-3.23,7.99h-10.29Zm16.2-15.11h14.18l-5.2-12.37-1.75-4.71h-.33l-1.75,4.65-5.15,12.42Z" />
                <path d="m186.23,93.24c-4.42,0-8.05-.56-10.89-1.67-2.85-1.11-4.96-2.66-6.35-4.65-1.39-1.99-2.1-4.28-2.13-6.87h9.96c.07,2.08.93,3.7,2.57,4.87,1.64,1.17,4.03,1.75,7.17,1.75,2.81,0,4.93-.44,6.38-1.31,1.44-.88,2.16-2.1,2.16-3.67,0-1.35-.35-2.34-1.04-2.98-.69-.64-1.77-1.11-3.23-1.42-1.46-.31-3.38-.61-5.75-.9-3.76-.44-6.92-1.08-9.47-1.92-2.55-.84-4.48-2.03-5.77-3.59-1.3-1.55-1.94-3.64-1.94-6.27,0-3.9,1.61-6.92,4.82-9.06,3.21-2.13,7.61-3.2,13.19-3.2,5.22,0,9.38,1.05,12.48,3.15,3.1,2.1,4.8,5.06,5.09,8.89h-9.63c-.22-1.93-1.06-3.34-2.52-4.21-1.46-.88-3.39-1.31-5.8-1.31s-4.41.42-5.77,1.26c-1.37.84-2.05,1.99-2.05,3.45,0,1.13.31,2,.93,2.6.62.6,1.65,1.06,3.09,1.37,1.44.31,3.4.61,5.88.9,3.87.47,7.09,1.11,9.66,1.92,2.57.8,4.5,2.02,5.77,3.67,1.28,1.64,1.92,3.94,1.92,6.9,0,3.83-1.61,6.84-4.82,9.03-3.21,2.19-7.85,3.28-13.9,3.28Z" />
                <path d="m219.67,92.74v-32.24h-13.25v-7.66h36.18v7.66h-13.46v32.24h-9.47Z" />
                <path d="m246.6,92.74v-39.9h33.77v7.55h-24.25v8.65h21.57v7.06h-21.57v9.09h24.36v7.55h-33.88Z" />
                <path d="m285.29,92.74v-39.9h23.54c2.81,0,5.35.38,7.64,1.15,2.28.77,4.08,2.01,5.39,3.72,1.31,1.72,1.97,4.01,1.97,6.9,0,2.37-.63,4.44-1.89,6.21-1.26,1.77-3.06,2.95-5.39,3.53v.38c2.15.37,3.74,1.19,4.76,2.46,1.02,1.28,1.53,3.06,1.53,5.36v5.47c0,.77.03,1.54.08,2.33.05.79.26,1.58.63,2.38h-9.58c-.44-.91-.66-2.48-.66-4.71v-4.11c0-1.71-.41-3.05-1.23-4-.82-.95-2.44-1.42-4.84-1.42h-12.42v14.23h-9.52Zm9.52-21.13h12.1c2.74,0,4.63-.56,5.69-1.67,1.06-1.11,1.59-2.55,1.59-4.3,0-2.08-.67-3.53-2-4.35-1.33-.82-3.09-1.23-5.28-1.23h-12.1v11.55Z" />
              </g>
            </svg>
          </a>
        </div>
        <nav role="navigation" className={`nav-menu w-nav-menu ${opened ? 'open' : ''}`}>
          <div className="nav-page">

            <Link
              href={'/blog/category/chatgpt'}
              className="nav-link w-inline-block"
              key='ChatGPT'
              title='ChatGPT'
              prefetch={false}
            >
              <div className="nav-text-block">
                <div
                  className="nav-text"
                  style={{
                    transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  ChatGPT
                </div>
                <div
                  className="nav-text absolute"
                  style={{
                    transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  ChatGPT
                </div>
              </div>
            </Link> 

            <div className="nav-circle"></div>
            <Link
              href={'/blog/category/midjourney'}
              className="nav-link w-inline-block"
              key='midjourney'
              title='Midjourney'
              prefetch={false}
            >
              <div className="nav-text-block">
                <div
                  className="nav-text"
                  style={{
                    transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  Midjourney
                </div>
                <div
                  className="nav-text absolute"
                  style={{
                    transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  Midjourney
                </div>
              </div>
            </Link>

            <div className="nav-circle"></div>
            <Link
              href={'/blog/category/prompt-design'}
              className="nav-link w-inline-block"
              key='prompt-design'
              onClick={openMenu}
              title='Prompt Design'
              prefetch={false}
            >
              <div className="nav-text-block">
                <div
                  className="nav-text"
                  style={{
                    transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  Prompt Engineering
                </div>
                <div
                  className="nav-text absolute"
                  style={{
                    transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  Prompt Engineering
                </div>
              </div>
            </Link> 
            <div className="nav-circle"></div>
           

            <Link
              href={'/blog/category/chatgpt-produttivita'}
              className="nav-link w-inline-block"
              key='chatgpt-produttivita'
              title='ChatGPT & Produttività'
              prefetch={false}
            >
              <div className="nav-text-block">
                <div
                  className="nav-text"
                  style={{
                    transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  ChatGPT & Produttività
                </div>
                <div
                  className="nav-text absolute"
                  style={{
                    transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  ChatGPT & Produttività
                </div>
              </div>
            </Link>            
            <div className="nav-circle"></div>
           

            <Link
              href={'/blog/category/news-intelligenza-artificiale'}
              className="nav-link w-inline-block"
              key='news-ai'
              title='News AI'
              prefetch={false}
            >
              <div className="nav-text-block">
                <div
                  className="nav-text"
                  style={{
                    transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  News AI
                </div>
                <div
                  className="nav-text absolute"
                  style={{
                    transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  News AI
                </div>
              </div>
            </Link>
          </div>
          <div className="nav-social">

            <Link
              href={'https://www.instagram.com/the_prompt_master/'}
              className="nav-link w-inline-block"
              target="_blank"
              key='instagram'
              title='Instagram'
              prefetch={false}
            >
              <div className="nav-text-block">
                <div className="nav-text">Instagram</div>
                <div className="nav-text absolute">Instagram</div>
              </div>
            </Link>

            <div className="nav-circle"></div>
            <Link
              href={'https://x.com/luciacenetiempo'}
              className="nav-link w-inline-block"
              target="_blank"
              key='twitter'
              title='Twitter'
              prefetch={false}
            >
              <div className="nav-text-block">
                <div className="nav-text">Twitter</div>
                <div className="nav-text absolute">Twitter</div>
              </div>
            </Link>

            <div className="nav-circle"></div>
            <Link
              href={'https://www.linkedin.com/in/luciacenetiempo/'}
              className="nav-link w-inline-block"
              target="_blank"
              key='linkedin'
              title='Linkedin'
              prefetch={false}
            >
              <div className="nav-text-block">
                <div className="nav-text">Linkedin</div>
                <div className="nav-text absolute">Linkedin</div>
              </div>
            </Link>
          </div>
          {/* <div className="nav-circle"></div> */}
        </nav>

        <div className={`nav-mobile ${opened ? 'open' : ''}`} onClick={openMenu}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default HeaderOld;
