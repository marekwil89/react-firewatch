import React from 'react';

import Title from './Title';

class SubscribeComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      validForm: false, 
      doorIconStatus: 'access-status fa fa-lock'
    }
  }
  
  unlockDoors(event){
    if(!this.input.value || ''){
      this.accessDenied()
    }
    else{
      this.accessGranted()
    }
    event.preventDefault()
  }

  accessGranted(){
    this.setState({validForm: true})
    this.setState({doorIconStatus: 'access-status fa fa-unlock'})
  }
  
  accessDenied(){
    this.setState({validForm: false})
    this.setState({doorIconStatus: 'access-status fa fa-lock'})

    const accessStatus = this.refs.accessStatus
    const formBox = this.refs.formBox

    accessStatus.className += " access-denied";
    formBox.className += " shake";
    setTimeout(function(){
      accessStatus.classList.remove("access-denied");
      formBox.classList.remove("shake");
    }, 500);
  }

  openDoors(){
    if(!this.state.validForm){
      this.accessDenied()
    } else{
      const doorLeft = this.refs.doorLeft
      const doorRight = this.refs.doorRight
      const subscribeSection = this.refs.subscribeSection

      doorLeft.className += " open-left-door"
      doorRight.className += " open-right-door"
      setTimeout(function(){
       subscribeSection.className += " hide"
      }, 500);
    }
  }

  render() {
    return (
      <section ref="subscribeSection" className="subscribe-section">
        <div ref="doorLeft" className="door left">
          <form ref="formBox" onSubmit={this.unlockDoors.bind(this)} className="form-box">
            <Title word="Try magic"/>
            <p>fill email field and press lock icon.</p>
            <fieldset>
              <legend>Email:</legend>
              <input type="text" ref={(input) => this.input = input} />
            </fieldset>

            <fieldset>
              <input type="submit" value="Unlock" />
            </fieldset>
          </form>
        </div>
        <div ref="doorRight" className="door right">
          <div onClick={this.openDoors.bind(this)} className="access-box">
            <i ref="accessStatus" className={this.state.doorIconStatus} aria-hidden="true"></i>
          </div>
        </div>
      </section>
    );
  }
}


export default SubscribeComponent;