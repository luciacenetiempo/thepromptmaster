import Head from 'next/head';
import Header from './Header';
import LoopingText from './LoopingText';
import ImageTop from './ImageTop';
import BlogPost from './BlogPost';
import Related from './Related';
import Footer from './Footer';
import Carousel from './Carousel';
// import { useCanonicalURL } from './../lib/CanonicalURL';
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
  let cover = props.post._embedded['wp:featuredmedia'] ? props.post._embedded['wp:featuredmedia'][0].source_url : '';
  let title = props.post.title.rendered;
  let categories = props.post._embedded['wp:term'][0];
  let tags = props.post._embedded['wp:term'][1];
  console.log(props.post)
  return (
    <>
      <Header color={color} />
      <ImageTop title='THE PROMPT MASTER'
        color='light'
        url={cover}
        alt={title}
      />
      <div className="strip">
        <LoopingText
          text={categories[0].name}
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
          text='the prompt master'
          size='smallBold'
          velocity={0.08}
          color='dark'
        />
      </div>
    </>
  );
};

export default TemplatePost;
