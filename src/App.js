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
      toggleMenu: false
    }
  }

  handleToggle = () => {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    })
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
          <button id="menu-button" onClick={this.handleToggle}>
            <span>MENU </span>
            <FontAwesomeIcon icon="bars" id='hamburger' onClick={this.handleToggle}/>
          </button>
          {!this.state.toggleMenu
            ? (
              <>
              </>
            )
            : (
              <nav id="pop-out-menu">
                <a>SERVICES</a>
                <a>PORTFOLIO</a>
                <a>ABOUT</a>
                <a>TEAM</a>
                <a>CONTACT</a>
              </nav>
            )
          }
        </nav>
        <header className="masthead">
          <div className="container">
            <div className = "ital-header">Welcome to our Studio!</div>
            <div className="caps-header">IT'S NICE TO MEET YOU</div>
            <button className="info-button">TELL ME MORE</button>

          </div>
        </header>
      </div>
    );
  }
}

export default App;
