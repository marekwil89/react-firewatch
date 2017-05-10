import React from 'react';

class TitleComponent extends React.Component {
  render() {
    return (
      <h2 className="title">{this.props.word}<span className="main-color">.</span></h2>
    )
  }
}
 
export default TitleComponent;