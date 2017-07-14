import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import NavPanel from './components/NavPanel/NavPanel';
import News from './components/News/News';
import About from './components/About/About';
import Locations from './components/Locations/Locations';
import Coaching from './components/Coaching/Coaching';
import Membership from './components/Membership/Membership';
import Footer from './components/Footer/Footer';

import DFWTT from './common/constants';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      navPanelShowing: false,
      coachingScreen: 0,
    };
  }

  toggleNavPanel = () => {
    this.setState(prevState => ({ navPanelShowing: !prevState.navPanelShowing }));
  }

  toggleCoachingScreen = coachingScreen => {
    this.setState(prevState => ({ coachingScreen }));
  }

  getActiveRoute = () => {
    const path = window.location.href;

    if (path.indexOf('/about') > -1) return 1;
    else if (path.indexOf('/locations') > -1) return 2;
    else if (path.indexOf('/coaching') > -1) return 3;
    else if (path.indexOf('/membership') > -1) return 4;
    
    return 0;
  }

  clickThroughListItem = id => {
    document.getElementById(id).click();
  }

  renderNews = () => (
    <News news={DFWTT.news} />
  )

  renderAbout = () => (
    <About
      logo={DFWTT.logo}
      about={DFWTT.about} />
  )

  renderLocations = () => (
    <Locations
      locations={DFWTT.locations} />
  )

  renderCoaching = () => (
    <Coaching
      screen={this.state.coachingScreen}
      toggleScreen={this.toggleCoachingScreen}
      pricing={DFWTT.coaching.pricing}
      instructors={DFWTT.coaching.instructors} />
  )

  renderMembership = () => (
    <Membership
      dropBy={DFWTT.dropBy}
      membership={DFWTT.membership} />
  )

  render() {
    return (
      <Router>
        <div className="App">
          <Header
            logo={DFWTT.logo}
            title={DFWTT.title} />
          <Contact
            email={DFWTT.email}
            phone={DFWTT.phone} />

          <div className="App-content">
            {this.state.navPanelShowing
              ? <NavPanel
                  pages={DFWTT.pages}
                  getActiveRoute={this.getActiveRoute} 
                  clickThroughListItem={this.clickThroughListItem}
                  toggleNavPanel={this.toggleNavPanel} />
              : (
                <div>
                  <Route exact path="/" render={this.renderNews} />
                  <Route path="/about" render={this.renderAbout} />
                  <Route path="/locations" render={this.renderLocations} />
                  <Route path="/coaching" render={this.renderCoaching} />
                  <Route path="/membership" render={this.renderMembership} />
                </div>
              )}
          </div>
          
          <Footer
            navPanelShowing={this.state.navPanelShowing}
            toggleNavPanel={this.toggleNavPanel} />
        </div>
      </Router>
    );
  }
}

export default App;
