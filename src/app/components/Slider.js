import React from 'react';
import Overlay from './Overlay';

class SliderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cursor: 0,
      speed: 5000,
      slides: [
        {
          name: 'Kris Dump',
          date: '23.03.2017',
          title: 'Senior Front End Developer',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quos iusto temporibus molestias nesciunt quidem magni, ipsam animi ratione. Temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quos iusto temporibus molestias nesciunt quidem magni, ipsam animi ratione. Temporibus.',
          img: 'app/assets/images/icon1.png'
        },
        {
          name: 'David More',
          date: '24.03.2017',
          title: 'Front End Developer',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quos iusto temporibus molestias nesciunt quidem magni, ipsam animi ratione. Temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quos iusto temporibus molestias nesciunt quidem magni, ipsam animi ratione. Temporibus.',
          img: 'app/assets/images/icon2.png'
        },
        {
          name: 'Mark Wolberg',
          date: '24.03.2017',
          title: 'Junior Front End Developer',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quos iusto temporibus molestias nesciunt quidem magni, ipsam animi ratione. Temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quos iusto temporibus molestias nesciunt quidem magni, ipsam animi ratione. Temporibus.',
          img: 'app/assets/images/icon3.png'
        }
      ]
    };
  };
  
  componentDidMount() {
    setInterval(this.slider.bind(this), this.state.speed)
  }
  
  slider(){
    let newCursor = this.state.cursor
    newCursor += 1
    if(newCursor >= this.state.slides.length){
      newCursor = 0
    }
    this.setState({cursor: newCursor})
  }

  render() {
    return (
      <section className="slider-section">
        <Overlay top="20" left="30" color="#dadada" width="700" height="700" />
        <ul className="slider-box">
          {this.state.slides.map((element, index) => {
            let active = (index === this.state.cursor) ? "active" : '';
            
            return <li key={index} className={`slide ${active}`}>
              
              <div className="slide-wrap">
                <aside>
                  <time>{element.date}</time>
                  <h4>{element.title}</h4>
                  <h3>{element.name}</h3>
                  <div className="hr"></div>
                  <p>{element.descr}</p>
                </aside>
                <figure>
                  <img src={element.img} />
                </figure>
              </div>
            </li>
          })}
        </ul>
      </section>
    )
  }
}
 
export default SliderComponent;