import React from 'react';

import Overlay from './Overlay';
import Btn from './Btn';
import Title from './Title';

class InfoComponent extends React.Component {
  
  render() {
    return (
      <section className="info-section">
        <article>
          <Overlay top="0" left="-80" color="#dadada" width="800" height="500" />
          <Title word="Something useful"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit amet vitae explicabo soluta, tenetur vel beatae rerum rem et veritatis eos nostrum eum, itaque dolor neque ipsam nihil. Ipsum nihil similique dolor quidem cum voluptate commodi repudiandae, totam ad itaque</p>
          <Btn btnText="Show" />
        </article>
        <figure>
          <img src="app/assets/images/adventure-info-section.jpg"></img>
        </figure>
      </section>
    )
  }
}
 
export default InfoComponent;