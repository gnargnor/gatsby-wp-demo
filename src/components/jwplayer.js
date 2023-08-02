import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';

function JWPlayer({ contentUrl, key, videoId }) {
  const playerDiv = useRef(null);

  useEffect(() => {
    if (window.jwplayer && playerDiv.current) {
      window.jwplayer(playerDiv.current).setup({
        // JW Player setup options
        file: contentUrl,
        // file: `https://content.jwplatform.com/videos/${videoId}.mp4`,
      });
    }
  }, [videoId]);

  return (
    <div>
      <Helmet>
        <script src="https://cdn.jwplayer.com/libraries/XYZ.js" />
      </Helmet>
      <div id={`player-${key}`} ref={playerDiv}></div>
    </div>
  );
}

export default JWPlayer;