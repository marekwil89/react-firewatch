import React from 'react';

class OverlayComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overlayClass: {
        top: 0,
        left: 0,
        background: "none",
        width: 500,
        height: 400
      }
    };
  }

  componentDidMount(){
    this.setState(
      {
        overlayClass: {
          top: this.props.top + '%',
          left: this.props.left + '%',
          background: this.props.color,
          width: this.props.width + 'px',
          height: this.props.height + 'px'
        }
      }
    )
  }

  render() {
    return (
      <div className="overlay" style={this.state.overlayClass}></div>
    )
  }
}
 
export default OverlayComponent;