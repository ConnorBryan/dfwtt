import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import {
  Button,
  Card,
  Header,
  Icon,
  Image,
  Item,
  List,
  Menu,
  Message,
  Segment,
} from 'semantic-ui-react';
import './App.css';

import NavPanel from './components/NavPanel/NavPanel';
import News from './components/News/News';
import About from './components/About/About';
import Membership from './components/Membership/Membership';
import Locations from './components/Locations/Locations';

import DFWTT from './common/constants';

const Pricing = () => (
  <Item.Group divided>
    {DFWTT.coaching.pricing.map((_package, i) => (
      <Item key={i}>
        <Item.Content>
          <Item.Header>
            {_package.package}
          </Item.Header>
          <Item.Description>
            {_package.lessons} lessons, {_package.players}, {_package.length} session.
          </Item.Description>
        </Item.Content>
        <Item.Extra className="pull-right">
          <Header as="h2">
            ${_package.price}.00
          </Header>
        </Item.Extra>
      </Item>
    ))}
  </Item.Group>
);

const Instructors = () => (
  <Card.Group
    className="Instructors"
    doubling
    stackable>
    {DFWTT.coaching.instructors.map((instructor, i) => (
      <Card key={i}>
        <Image src={instructor.image} centered />
        <Card.Content>
          <Card.Header>
            {instructor.name}
          </Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Card.Description>
            <Header as="h4">
              Education & Experience
            </Header>
            <List>
              {instructor.education.map((item, i) => (
                <List.Item key={i}>
                  {item}
                </List.Item>
              ))}
            </List>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Card.Description>
            <Header as="h4">
              Background
            </Header>
            <List>
              {instructor.background.map((item, i) => (
                <List.Item key={i}>
                  {item}
                </List.Item>
              ))}
            </List>
          </Card.Description>
        </Card.Content>
      </Card>
    ))}
  </Card.Group>
);

const Coaching = props => (
  <div className="Coaching">
    <Header
      className="Content-header"
      as="h2">
      Coaching
    </Header>
      <Menu attached="top">
        <Menu.Item
          active={props.screen === 0}
          onClick={() => props.toggleScreen(0)}>
          Pricing
        </Menu.Item>
        <Menu.Item
          active={props.screen === 1}
          onClick={() => props.toggleScreen(1)}>
          Instructors
        </Menu.Item>
      </Menu>
      <Segment
        className="Coaching-content"
        attached="bottom">
        {props.screen === 0 ? <Pricing /> : <Instructors />}
      </Segment>
  </div>
);

class App extends Component {
  constructor() {
    super();
    this.state = {
      navPanelShowing: false,
      coachingScreen: 0,
    }
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

  render() {
    return (
      <Router>
        <div className="App">
          <div className="Header">
            <Link to='/'>
                <Header
                  as="h3"
                  image={DFWTT.logo}
                  content={DFWTT.title} />
            </Link>
          </div>
          <div className="Contact">
            <Button.Group fluid>
              <a href={`mailto:${DFWTT.email}`}>
                <Button>
                  <Icon name="mail outline" />
                  {DFWTT.email}
                </Button>
              </a>
              <Button>
                <Icon name="text telephone" />
                {DFWTT.phone}
              </Button>
            </Button.Group>
          </div>
          <div className="Content">
            {this.state.navPanelShowing
              ? <NavPanel
                  pages={DFWTT.pages}
                  getActiveRoute={this.getActiveRoute} 
                  clickThroughListItem={this.clickThroughListItem}
                  toggleNavPanel={this.toggleNavPanel} />
              : (
                <div className="Content-routes">
                  <Route exact path="/" render={() => <News news={DFWTT.news} />} />
                  <Route path="/about" render={() => <About logo={DFWTT.logo} about={DFWTT.about} />} />
                  <Route path="/locations" render={() => <Locations locations={DFWTT.locations} />} />
                  <Route path="/coaching" render={() => <Coaching screen={this.state.coachingScreen} toggleScreen={this.toggleCoachingScreen} />} />
                  <Route path="/membership" render={() => <Membership dropBy={DFWTT.dropBy} membership={DFWTT.membership} />} />
                </div>
              )}
          </div>
          <div className="Footer">
              <Button
                className="Footer-menuButton"
                onClick={this.toggleNavPanel}
                toggle={this.state.navPanelShowing}
                circular>
                <Icon
                  className="Footer-icon"
                  name='bars' /> Menu
              </Button>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
