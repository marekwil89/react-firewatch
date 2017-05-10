import React from 'react';

class SeparateComponent extends React.Component {
  render() {
    return (
      <section className="separate-section">
        <div className={'separate-box ' + this.props.clip}></div> 
      </section>
    )
  }
}
 
export default SeparateComponent;