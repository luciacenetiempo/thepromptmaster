import React from 'react';
import ImageWide from './ImageWide';
import ImageRegular from './ImageRegular';
import VideoRegular from './VideoRegular';
import VideoWide from './VideoWide';
import CodeBlock from './CodeBlock';
import Quote from './Quote';
import Button from './Button';
import Gallery from './Gallery';
import Text from './Text';
import Twitter from './Twitter';

// Mappatura dei componenti
const COMPONENT_MAP = {
  ImageWide: ImageWide,
  ImageRegular: ImageRegular,
  VideoRegular: VideoRegular,
  VideoWide: VideoWide,
  CodeBlock: CodeBlock,
  Quote: Quote,
  Button: Button,
  Gallery: Gallery,
  Twitter: Twitter
};

function parseProps(propString) {
  if (propString) {
    return propString.split(/props-/).reduce((props, current) => {
      const [key, value] = current.split('=');
      if (value !== undefined) {
        props[key] = value.replace(/"/g, ''); // Rimuove le virgolette
      }
      return props;
    }, {});
  }
  return {};
}

function renderPart(part, index) {
  var codeRegex = /<pre><code>(.*?)<\/code><\/pre>/s;
  const codeMatch = part.match(codeRegex);
  if (codeMatch) {
    part.split(codeRegex)
    const codeContent = codeMatch[1];
    return <CodeBlock key={index} code={codeContent} />;
  }
  const componentMatch = part.match(/\[\[(\w+)\s*(.*?)\]\]/);
  if (componentMatch) {
    const componentName = componentMatch[1];
    const propsString = componentMatch[2];
    if (COMPONENT_MAP[componentName]) {
        const props = parseProps(propsString);
        return React.createElement(COMPONENT_MAP[componentName], { key: index, ...props });
    }
  }
  if(part.length > 1){
    return <div className='content rich-text-block' dangerouslySetInnerHTML={{ __html: `${part.startsWith("<") ? part : `<p>${part}</p>`}` }} />;
  }
}

function parseCustomSyntax(content) {
  const customSyntaxRegex = /<p>|<\/p>/;
  const parts = content.split(customSyntaxRegex);
  return parts.map(renderPart);
}

export default function BlogPost({ content }) {
  const parsedContent = parseCustomSyntax(content);
  return parsedContent;
}
