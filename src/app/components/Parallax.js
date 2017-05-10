import React from 'react';

class ParallaxComponent extends React.Component {
  
  componentDidMount(){
      window.addEventListener('scroll', this.parallax.bind(this));
  }

  // componentWillUnmount(){
  //     window.removeEventListener('scroll', this.parallax.bind(this));
  // }
  
  parallax(){

    const mountain = this.refs.mountain
    const landscape = this.refs.landscape
    const rocks = this.refs.rocks
    const forest = this.refs.forest
    let wScroll = window.pageYOffset || document.documentElement.scrollTop
    
    mountain.style.transform = "translateY("+ wScroll/1.3 +"px)";
    rocks.style.transform = "translateY("+ wScroll/1.7 +"px)";
    landscape.style.transform = "translateY("+ (-wScroll/5) +"px)";
    forest.style.transform = "translateY("+ (-wScroll/7) +"px)";
  }
  
  render() {
    return (
      <div className="header-component">
        <h1>On <span className="main-color">road</span></h1>
        <div ref="mist" className="img mist"></div>
        <div ref="mountain" className="img mountain"></div>
        <div ref="rocks" className="img rocks"></div>
        <div ref="landscape" className="img landscape"></div>     
        <div ref="forest" className="img forest"></div>
        <a className="move-down">
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </a>  
      </div>
    )
  }
}
 
export default ParallaxComponent;