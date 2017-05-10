import React from 'react';


class MotivationComponent extends React.Component {


  componentDidMount(){
      window.addEventListener('scroll', this.flareRotate.bind(this));
  }

  flareRotate(){
    const flare = this.refs.flare
    const motivationSection = this.refs.motivationSection

    let wScroll = window.pageYOffset || document.documentElement.scrollTop

    setTimeout(()=>{
      flare.style.transform = "rotate("+wScroll/30+"deg)";
      motivationSection.style.filter = "brightness("+ wScroll/20 +"%)"
    }, 250);

  }

  render() {
    return (
      <section ref="motivationSection" className="motivation-section">
        <div ref="flare" className="flare-img"></div>
      </section>
    )
  }
}
 
export default MotivationComponent;