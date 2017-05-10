import React from 'react';

import Title from './Title';

class PortfolioComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      worksData: [
        {
          id: 0,
          name: 'Creator #1',
          date: '15/12/2016',
          adres: "www.google.pl",
          img: 'app/assets/images/service1-portfolio-section.jpg',
          para: 'This is some kind of example text'
        },
        {
          id: 1,
          name: 'Creator #2',
          date: '16/25/2016',
          adres: "www.google.pl",
          img: 'app/assets/images/service2-portfolio-section.jpg',
          para: 'This is some kind of example text'
        },
        {
          id: 3,
          name: 'Creator #3',
          date: '15/12/2016',
          adres: "www.google.pl",
          img: 'app/assets/images/service3-portfolio-section.jpg',
          para: 'This is some kind of example text'
        },
        {
          id: 4,
          name: 'Creator #4',
          date: '16/25/2016',
          adres: "www.google.pl",
          img: 'app/assets/images/service4-portfolio-section.jpg',
          para: 'This is some kind of example text'
        }
      ]
    }
  }
  render() {
    return (
      <section className="portfolio-section">
        <Title word="Our Services"/>
        <div className="works">
          {this.state.worksData.map(item => {
            return <figure className="work-box" key={item.id}>
              <img src={item.img} />
              <figcaption>
                <h3>{item.name}</h3>
                <div className="hr"></div>
                <time>{item.date}</time>
                <address>{item.adres}</address>
                <p>{item.para}</p>
              </figcaption>
            </figure>
          })}
        </div>
      </section>
    );
  }
}
 
export default PortfolioComponent;