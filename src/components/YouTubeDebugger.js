import React from 'react';

class YouTubeDebugger extends React.Component {

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  handleBitrateClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
    console.log(this.state);
  }

  handleResolutionClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.handleBitrateClick}>Change Bitrate</button>
        <button className='resolution' onClick={this.handleResolutionClick}>Change Resolution</button>
      </div>
    )
  }

}

export default YouTubeDebugger
