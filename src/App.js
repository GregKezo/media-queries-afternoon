import React from 'react';
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
library.add(faBars)



class App extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      name: 'hi'
    }
  }


  render() {
    return (
      <div className="App">
        <nav className="nav-bar">
          <div id="logo">Start Bootstrap</div>
          <nav className="links">
            <a>SERVICES</a>
            <a>PORTFOLIO</a>
            <a>ABOUT</a>
            <a>TEAM</a>
            <a>CONTACT</a>
          </nav>
          <button id="menu-button">
            <span>MENU </span>
            <FontAwesomeIcon icon="bars" id='hamburger' onClick={this.handleToggle}/>
          </button>
        </nav>
        <header className="masthead">
          <div className="container">
            

          </div>
        </header>
      </div>
    );
  }
}

export default App;
