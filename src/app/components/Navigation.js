import React from 'react';

class NavigationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: '',
      link: ''
    }
  }

  navToggle(){
    if(this.state.nav === ''){
      this.setState({nav: 'opened'})
    } else{
      this.setState({nav: ''})
    }
  }

  render() {
    let opened = this.state.nav
    return (
      <span>
        <button onClick={this.navToggle.bind(this)} className={`side-menu-trigger ${opened}`}></button>
        <nav ref="nav" className={`side-menu ${opened}`}>
          <h2>Not ready yet</h2>
          <a className="link" href="#/about">About</a>
          <a className="link" href="#/services">Services</a>
          <a className="link" href="#/team">Team</a>

        </nav>
      </span>
    )
  }
}
 
export default NavigationComponent;