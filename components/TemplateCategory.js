import Head from 'next/head';
import Link from 'next/link';
import PostTileBig from './PostTileBig';
import LoopingText from './LoopingText';
import Header from './Header';
import Footer from './Footer';
// import { useCanonicalURL } from '@/lib/CanonicalURL';

const TemplateCategory = (props) => {
  const category = props.category[0];
  const posts = props.posts;
  const sticky = props.posts.slice(0, 2);
  const nonsticky = props.posts.slice(0, 10);
  const reverse = props.posts.reverse();
  let categoryName = category.name;
  let categoryObj = {
    name: categoryName,
    slug: category.slug
  };
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
            text={`${categoryName}`}
            size='small'
            velocity={0.08}
            color='dark'
          />
        </div>
      </div>
      <div className='section-content paddingVertical'>
        <div className='content rich-text-block'>
          <h1>{categoryName}</h1>
          <p dangerouslySetInnerHTML={{ __html: category.description }} />
        </div>
      </div>
      {
        category.slug == 'prompt-engineering' ? (
          <div className='section-content paddingVertical'>
            <div className="collection-list-wrapper-top noBorder">
              <div role="list" className="content-wide rich-text-block">

                {
                  reverse ? (
                    reverse.map((post, index) => (
                      <div className='post-tile-row' key={index}>
                        <span className='number'>{index+1}.</span>
                        <PostTileBig post={post} isIdex={index} index={index} isCategory={categoryObj} />
                      </div>
                    ))
                  ) : ('')
                }
              </div> 
            </div>
          </div>
        ) : ( 
          <>
            <div className="collection-list-wrapper paddingVertical">
              <div role="list" className="collection-list">
                {
                  nonsticky ? (
                    nonsticky.map((post, index) => (
                      <PostTileBig post={post} index={index} key={index} isCategory={categoryObj} />
                    ))
                  ) : ('')
                }
              </div>
            </div>
          </>
        )
      }
    </>
  );
};

export default TemplateCategory;
