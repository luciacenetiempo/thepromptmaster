import React, { useState } from 'react';
import Head from 'next/head';
import Header from './Header';
import LoopingText from './LoopingText';
import ImageTop from './ImageTop';
import BlogPost from './BlogPost';
import Related from './Related';
import NewsletterStrip from './NewsletterStrip';
import Footer from './Footer';
import { useCanonicalURL } from '@/lib/CanonicalURL';

const formatDate = (inputDate) => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(inputDate).toLocaleDateString('it-IT', options);
};
const TemplatePost = (props) => {
  return (
    <>
      <Head>
        <title>{props.postData.title} | The Prompt Master</title>
        <meta name="description" content={props.postData.incipit} />
        <meta name="keywords" content={props.postData.keywords} />
        <meta name="author" content={props.postData.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={useCanonicalURL()} />
      </Head>
      <Header color={props.postData.color} />
      <ImageTop title='THE PROMPT MASTER'
        color='light'
        url={props.postData.cover}
        alt={props.postData.title}
      />
      <div className="strip">
        <LoopingText
          text={props.postData.title}
          size='small'
          velocity={0.08}
          color='dark'
        />
      </div>
      <div className='section-content'>
        <div className='content rich-text-block'>
          <div className="post-info">
            {props.postData.categories.map((category, index) => (
              <div className="categoryList" key={index}>
                <a key={index} href={`/blog/${category.toLowerCase().replace(/\s+/g, '-')}`} className="link-category w-inline-block">
                  <div className="category">{category}</div>
                </a>
                <div className="post-circle"></div>
              </div>
            ))}
            <div className="date">{formatDate(props.postData.date)}</div></div>
        </div>
        <BlogPost content={props.postData.contentHtml} />
      </div>
      <NewsletterStrip />

      <div className="strip paddingBoth">
        <LoopingText
          text='potrebbe interessarti anche'
          size='smallBold'
          velocity={0.08}
          color='dark'
        />
      </div>

      <Related posts={props.postData.myrelatedPostsData} />
      <Footer />
    </>
  );
};

export default TemplatePost;
