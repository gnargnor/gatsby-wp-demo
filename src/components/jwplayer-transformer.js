import HtmlReactParser from 'html-react-parser';
import React from 'react';
import JWPlayer from './jwplayer';

const transform = (node, index) => {
  if (node.type === 'tag' && node.name === 'div' && node.attribs.class === 'jwppp-video-box') {
    const videoId = node.attribs['data-video'];
    const contentUrlMeta = node.children.find(child => child.type === 'tag' && child.name === 'meta' && child.attribs.itemProp === 'contentUrl');
    const contentUrl = contentUrlMeta ? contentUrlMeta.attribs.content : '';

    console.log({ videoId, contentUrl, contentUrlMeta })
    
    // Extract other necessary data similarly...

    return <JWPlayer videoId={videoId} contentUrl={contentUrl} key={index} />;
  }
};

const replaceJWPlayer = (html) => HtmlReactParser(html, { transform });

export default replaceJWPlayer;