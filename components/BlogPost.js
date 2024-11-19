import React from 'react';
import parse, { domToReact, attributesToProps } from 'html-react-parser';
import ImageWide from './ImageWide';
import ImageRegular from './ImageRegular';
import VideoRegular from './VideoRegular';
import CodeBlock from './CodeBlock';
import Quote from './Quote';
import Button from './Button';
import Twitter from './Twitter';


// Mappatura dei componenti

function parseCustomSyntax(content) {
  // let newContent = content.replace(new RegExp(`href="http://blog.thepromptmaster.it/`, 'g'), `href="https://www.thepromptmaster.it/blog/`);
  const regex = /href="http:\/\/blog.thepromptmaster.it\/([^"]+)"/g;
  const newHtmlString = content.replace(regex, (match, capturedPath) => {
    const finalPath = capturedPath.split("/")[capturedPath.split("/").length - 2]; 
    return `href="/blog/${finalPath}"`;
  });
  let test = parse(newHtmlString,{
    replace(domNode) {
      if(domNode.name){ 
        if (domNode.name && domNode.name == 'a' && domNode.attributes) {
          let button = false;
          let href = '';
          let text = domNode.children[0].data;
          domNode.attributes.map((attr) => {
            if(attr.name == 'class' && attr.value.indexOf('wp-element-button') > -1){
              button = true;
            }
            if(attr.name == 'href'){
              href = attr.value;
            }
          })
          if(button){
            return <Button url={href} text={text} />
          } else {
            return domNode;
          }
        }
        // console.log(domNode.name)
        if (domNode.name && domNode.name == 'h1') {
          return <div className='content rich-text-block'><h1>{domToReact(domNode.children)}</h1></div>
        }
        if (domNode.name && domNode.name == 'h2') {
          return <div className='content rich-text-block'><h2>{domToReact(domNode.children)}</h2></div>
        }
        if (domNode.name && domNode.name == 'h3') {
          return <div className='content rich-text-block'><h3>{domToReact(domNode.children)}</h3></div>
        }
        if (domNode.name && domNode.name == 'h4') {
          return <div className='content rich-text-block'><h4>{domToReact(domNode.children)}</h4></div>
        }
        if (domNode.name && domNode.name == 'h5') {
          return <div className='content rich-text-block'><h5>{domToReact(domNode.children)}</h5></div>
        }
        if (domNode.name && domNode.name == 'h6') {
          return <div className='content rich-text-block'><h6>{domToReact(domNode.children)}</h6></div>
        }        
        if (domNode.name && domNode.name == 'ol') {
          return <div className='content rich-text-block'><ol>{domToReact(domNode.children)}</ol></div>
        }        
        if (domNode.name && domNode.name == 'ul') {
          return <div className='content rich-text-block'><ul>{domToReact(domNode.children)}</ul></div>
        }
        if (domNode.name && domNode.name == 'p') {
          return <div className='content rich-text-block'><p>
            {domToReact(domNode.children)}
          </p></div> 
        }        
        if (domNode.name && domNode.name == 'details') {
          return <div className='content rich-text-block'><details>{domToReact(domNode.children)}</details></div>
        }
        if (domNode.name && domNode.name == 'img' && domNode.attributes) {
          return <></>
        }
        if (domNode.name && domNode.name == 'code' && domNode.attributes) {
          return <></>
        }
        if (domNode.name && domNode.name == 'pre' && domNode.attributes) {
          return <CodeBlock code={domNode.children[0].children[0].data}/>
        }
        if (domNode.name && domNode.attribs.id == 'twitter') {
          return <Twitter id={domNode.attribs.dataid}/>
        }
        if (domNode.name && domNode.name == 'ol' && domNode.attribs.class == 'crp-list') {
          domNode.children.map((child) => {
            child.children.map((subchild) => {
              if(subchild.attribs.class == 'crp-list-item-title'){
                let checkSlug = subchild.children[0].attribs.href.split('/')
              }
            })
          })
          return 
        }
        if (domNode.name && domNode.name == 'blockquote') {
          let text = '';
          let cite = '';
          domNode.children.map((child) => {
            if(child.name == 'p'){
              text = child.children[0].data;
            }
            if(child.name == 'cite'){
              cite = child.children[0].data;
            }
          })
          return <Quote text={text} cite={cite} />
        }
        if (domNode.name && domNode.name == 'figure' && domNode.attributes) {
          let isWide = false;
          let isVideo = false;
          let isGallery = domNode.parent ? true : false;
          domNode.attributes.map((attr) => {
            if(attr.name == 'class' && attr.value.indexOf('size-large') > -1){
              isWide = true;
            }
            if(attr.name == 'class' && attr.value.indexOf('wp-block-gallery') > -1){
              isGallery = true;
              return <></>
            }
            if(attr.name == 'class' && attr.value.indexOf('wp-block-pullquote') > -1){
              return <></>
            }

          })
          
          if(!isGallery && !domNode.parent){
            let image_width = 100;
            let image_height = 100;
            let image_url = '';
            let image_alt = '';
            domNode.children[0].attributes.map((childAttr) => {
              if(childAttr.name == 'controls'){
                isVideo = true
              }
              if(childAttr.name == 'width'){
                image_width = childAttr.value
              }
              if(childAttr.name == 'height'){
                image_height = childAttr.value
              }
              if(childAttr.name == 'src'){
                image_url = childAttr.value
              }
              if(childAttr.name == 'alt'){
                image_alt = childAttr.value
              }
            })
            if(!isVideo){
              return <ImageWide src={image_url} alt={image_alt} width={image_width} height={image_height} />
            } 
            if(isWide && !isVideo){
              return <ImageWide src={image_url} alt={image_alt} width={image_width} height={image_height} />
            }
            if(isVideo){
              return <VideoRegular src={image_url} />
            }
          }

        }
      } else {
        return false
      }
    }
  })
  return test;
}

export default function BlogPost({content}) {
  const parsedContent = parseCustomSyntax(content);
  return parsedContent;
}
