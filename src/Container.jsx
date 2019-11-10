
import React from 'react';
import {PlayButton} from './PlayButton';


export class Container extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isMusicPlaying: false};
      console.log (this.audio);
    }
    handleClick() {
      if (this.state.isMusicPlaying)
        this.audio.pause();
      else
        this.audio.play();
      this.setState(prevState => {
        return { 
          isMusicPlaying: !prevState.isMusicPlaying   
        };
      });
    };
  
    render() {
     // const status =this.state.isMusicPlaying? 'Playing' : 'Not playing';
      return (
        <div>
          <PlayButton 
          isMusicPlaying={this.state.isMusicPlaying}
          onClick={this.handleClick.bind(this)} 
          />
          <audio id="audio" ref={(audioTag) => { this.audio = audioTag }} />
        </div>
      );
    }
  }