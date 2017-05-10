import React from 'react';

import Parallax from './Parallax';
import Info from './Info';
import Separate from './Separate';
import Portfolio from './Portfolio';
import Slider from './Slider';
import Footer from './Footer';
import Motivation from './Motivation';
import Navigation from './Navigation';
import Zoom from './Zoom';

class ContentComponent extends React.Component {

  render() {
    return (
      <main>
        <Navigation />
        <Parallax />
        <Separate clip="left top" />
        <Info />
        <Motivation />
        <Portfolio />
        <Slider />
        <Zoom />
        <Separate clip="right bottom" />
        <Footer />
      </main>
    );
  }
}
 
export default ContentComponent;