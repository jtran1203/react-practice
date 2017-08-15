import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './footer'
import Header from './header'
import Section1 from './section1'
import Section2 from './section2'
import Section3 from './section3'
import Recipes from './recipe'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipes: [
        {name: 'Meatballs'},
        {name: 'Mac & Cheese'},
        {name: 'Hot Cheetos'}
      ]
    }
  }
  render() {
    return (

      <div>
      <div>
        <Header name="Panda Fan" />
      </div>

    <div>
      <Section1 />
    </div>

    <div>
      <Section2 />
    </div>

    <div>
      <Section3 />
    </div>

    <div>
      <Recipes recipes={this.state.recipes} />
    </div>

        <div>
          <Footer />
        </div>



    </div>
    );
  }
}

export default App;
