import React from "react";
class Video extends React.Component {
  componentDidMount = () => {
    this.playVideo();
  };

  componentWillUnmount = () => {
      this.pauseVideo();
  };


  playVideo = () => {
    // You can use the play method as normal on your video ref
    this.refs.vidRef.play();
  };

  pauseVideo = () => {
    // Pause as well
    this.refs.vidRef.pause();
  };

  render = () => {
    return (
      <div>
        <video
          ref="vidRef"
          src="https://video.wixstatic.com/video/cb9ae5_2a63b4455edf4e7f846bb0b4bb7a3104/720p/mp4/file.mp4"
          type="video/mp4"
        />

        <div>
          <button onClick={this.playVideo}>
            Watch
          </button>
          <button onClick={this.pauseVideo}>
            Pause!
          </button>
        </div>
      </div>
    );
  };
}

export default Video;