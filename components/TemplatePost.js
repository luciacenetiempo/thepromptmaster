import React, { useState } from 'react';
import Head from 'next/head';
import Header from './Header';
import LoopingText from './LoopingText';
import ImageTop from './ImageTop';
import BlogPost from './BlogPost';
import Related from './Related';

const formatDate = (inputDate) => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(inputDate).toLocaleDateString('it-IT', options);
};
const TemplatePost = (props) => {
  return (
    <>
      <Head>
        <title>{props.postData.title} | The Prompt Master</title>
      </Head>
      <Header color={props.postData.color} />
      <ImageTop title='THE PROMPT MASTER'
        color='light'
        url={props.postData.cover}
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
            {props.postData.categories.map(category => (
              
              <>
                <a href={`/blog/${category.toLowerCase().replace(/\s+/g, '-')}`} className="link-category w-inline-block">
                  <div className="category">{category}</div>
                </a>
                <div className="post-circle"></div>
              </>
            ))}
            <div className="date">{formatDate(props.postData.date)}</div></div>
        </div>
        <BlogPost content={props.postData.contentHtml} />
      </div>

      <>

        <Related posts={props.postData.myrelatedPostsData} />
      </>
    </>
  );
};

export default TemplatePost;
