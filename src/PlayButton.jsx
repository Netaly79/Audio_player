import React from 'react';


export function PlayButton(props) {
    const className = props.isMusicPlaying ? 'play active' : 'play';
  return <a href="#" title="Play video" className={className} onClick={props.onClick}/>;
  }