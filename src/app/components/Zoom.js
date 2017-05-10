import React from 'react';

import Title from './Title';
import Btn from './Btn';

class ZoomComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      zoomShow: null,
      backgroundImage: 'url("/app/assets/images/map.png")',
      style: {
        left: 0,
        top: 0,
        backgroundPosition: ''
      }
    };
  }  

  mouseEnter(){
    this.setState({zoomShow: true})
  }
  
  mouseLeave(){
    this.setState({zoomShow: false})
  }
  
  mouseMove(e){
    let imgBox = this.refs.imgBox
    let zoom = this.refs.zoom
    
    let zoomSize = parseInt(window.getComputedStyle(zoom).height)
    let imgBoxSize = parseInt(window.getComputedStyle(imgBox).height)
    let photoBounding = imgBox.getBoundingClientRect();

    let MAX_POSITION = imgBoxSize - zoomSize;
    
    let x = e.clientX - photoBounding.left
    let y = e.clientY - photoBounding.top
    
    x -= zoomSize / 2;
    y -= zoomSize / 2;

    if (x + zoomSize > imgBoxSize) {
      x = MAX_POSITION
    }

    if (y + zoomSize > imgBoxSize) {
      y = MAX_POSITION
    }

    if (x < 0) {
      x = 0;
    }

    if (y < 0) {
      y = 0;
    }
    
    this.setState({style: {
      left: `${x}px`,
      top: `${y}px`,
      backgroundPosition: `${x * 0.4}% ${y * 0.4}%`
    }})
  }

  render() {
    return (
      <section className="zoom-section">
        <figure style={{backgroundImage: this.state.backgroundImage}} ref="imgBox" onMouseEnter={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)} onMouseMove={this.mouseMove.bind(this)} className="img-box">
        {this.state.zoomShow ?
          [
            <div key="zoomKey" style={{backgroundImage: this.state.backgroundImage , backgroundPosition: this.state.style.backgroundPosition, left: this.state.style.left, top: this.state.style.top}} ref="zoom" className="zoom"></div>
          ]
        : null}
          <span className="map-overlay"></span> 
        </figure>
        <aside>
          <Title word="Hover map"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut delectus at quae ipsum, accusamus porro illum? Dolor molestias id molestiae velit labore perspiciatis ut sunt, ratione, maiores harum officia facere at nemo voluptatem.</p>
          <Btn btnText="Make it" />
        </aside>
      </section>
    );
  }
}

export default ZoomComponent;