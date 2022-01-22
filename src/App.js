import './App.css';
import myVideo from './videos/testvideo.mp4'
import {VideoScroll} from 'react-video-scroll'

const setStyles = (wrapperEl, videoEl, playbackRate) => {
  wrapperEl.style.marginTop = `calc(180% - ${Math.floor(videoEl.duration) *
    playbackRate +
    'px'})`
  wrapperEl.style.marginBottom = `calc(180% - ${Math.floor(videoEl.duration) *
    playbackRate +
    'px'})`
}

function App() {
  return (
    <VideoScroll
      onLoad={props =>
        setStyles(props.wrapperEl, props.videoEl, props.playbackRate)
      }
      playbackRate={30}
      style={{ position: 'sticky' }}
    >
        <video src={myVideo}tabIndex="0"
        autobuffer="autobuffer"
        preload="preload"
        style={{ width: '100%', objectFit: 'contain' }}
        playsInline>
        <source type="video/mp4" src="./oculus.mp4" />
      </video>
    </VideoScroll>
  );
}

export default App;
