//Dependencies
import React, { Component } from 'react';

import PropTypes from 'prop-types';


//Components
import Header from './global/Header';
import Contact from './global/Content';
import Footer from './global/Footer';
import Publicidad from'./global/Publicidad';

//data
import items from'../data/Menu';

class App extends Component {
	static propTypes={
		children:PropTypes.object.isRequired
	};

  render() {
  	const {children}=this.props;
    return (
      <div className="App">
        <Header title="Faro" items={items}/>
        <Contact body={children}/>
        <div>
        <Publicidad/>  
        </div>
        
        <Footer />
      </div>
    );
  }
}

export default App;
