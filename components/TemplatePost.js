import React, { useState } from 'react';
import Head from 'next/head';
import Header from './Header';
import LoopingText from './LoopingText';
import ImageTop from './ImageTop';
import BlogPost from './BlogPost';
import Related from './Related';
import Footer from './Footer';
import { useCanonicalURL } from '@/lib/CanonicalURL';
import he from 'he';

const formatDate = (inputDate) => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(inputDate).toLocaleDateString('it-IT', options);
};

const TemplatePost = (props) => {
  
  let date = props.post.date;
  let content = props.post.content.rendered;
  let incipit = props.post.excerpt.rendered;
  let keywords = '';
  let author = '';
  let color = 'light';
  let cover = props.post._embedded['wp:featuredmedia'][0].source_url;
  // let cover = props.yoast_head_json.og_image[0].url;
  let title = props.post.title.rendered;
  let categories = props.post._embedded['wp:term'][0];
  let tags = props.post._embedded['wp:term'][1];
  return (
    <>
      <Head> 
        <title>{he.decode(props.post.title.rendered)} | The Prompt Master</title>
        <meta name="description" content={incipit} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={useCanonicalURL()} />
      </Head>
      <Header color={color} />
      <ImageTop title='THE PROMPT MASTER'
        color='light'
        url={cover}
        alt={title}
      />
      <div className="strip">
        <LoopingText
          text={title}
          size='small'
          velocity={0.08}
          color='dark'
        />
      </div> 
      <div className='section-content'>
        <div className='content rich-text-block'>
          <div className="post-info">
            {categories.map((category, index) => (
              <div className="categoryList" key={index}>
                <a key={index} href={`/blog/category/${category.slug}`} className="link-category w-inline-block">
                  <div className="category">{category.name}</div>
                </a>
                <div className="post-circle"></div>
              </div>
            ))}
            <div className="date">{formatDate(date)}</div></div>
        </div>
        <div className='content rich-text-block'><h1 dangerouslySetInnerHTML={{ __html: title }}></h1></div>
        <BlogPost content={content} />
      </div>
      <div className="strip paddingBoth">
        <LoopingText
          text='potrebbe interessarti anche'
          size='smallBold'
          velocity={0.08}
          color='dark'
        />
      </div>

      {/* <Related posts={props.post.myrelatedPostsData} /> */}  
      <Footer />
    </>
    // <span>ciao</span>
  );
};

export default TemplatePost;
