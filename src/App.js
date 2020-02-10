import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/head/Header';
import { Element } from 'react-scroll';
import Featured from './components/featured';
import VenueNfo from './components/eventInfo';
import Highlight from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/head/footer';

class App extends Component {
  render(){
    return(
      <div className="App" style={{ height: "1500px", background: "cornflowerwhite"}}>
        <Header/>

        <Element name="featured">
          <Featured/>
        </Element>

        <Element name="venue_NFO">
          <VenueNfo/>
        </Element>

        <Element name="highlights">
          <Highlight/>
        </Element>

        <Element name="pricing">
          <Pricing/>
        </Element>
      
        <Element name="location">
          <Location/>
        </Element>
        
        <Footer/>
      </div>
    );
}
}

export default App;
