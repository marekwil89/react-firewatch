import React from 'react';

class ButtonComponent extends React.Component {

  render() {
    return (
      <a className="btn-main" href="#">{this.props.btnText}</a>
    );
  }
}
 
export default ButtonComponent;