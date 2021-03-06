import React from 'react';
import Moment from 'moment';

class Timer extends React.Component {
  formatTime() {
    return Moment(this.props.msLeft).format('mm:ss');
  }

  render() {
    return (
      <div className="timer">{this.formatTime()}</div>
    );
  }
};

Timer.propTypes = {
  msLeft: React.PropTypes.number.isRequired
};

export default Timer;
