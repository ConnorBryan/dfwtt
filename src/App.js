import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import { Header, Button, Icon, List, Card, Image } from 'semantic-ui-react';

const DFWTT = {
  news: [
    {
      image: '/2017dfwttspringopen.jpg',
      header: '2017 DFWTT Spring Open',
      description: 'DFWTT hosted its yearly Spring Open on April 29th. The tournament was held in Dallas at the T Bar M Racquet Club and featured both USATT sanctioned and non-sanctioned events. There were 99 players who competed in these events. Thanks to everyone who attended the tournament.',
      links: [
        {
          title: 'Grant Bergmann\'s photos',
          path: '/',
        },
        {
          title: 'Results',
          path: '/',
        },
      ],
    },
  ],
};

const News = () => (
  <div className="News">
    <Header
      className="Content-header"
      as="h2">
      News
    </Header>
    <Card.Group stackable doubling>
      {DFWTT.news.map(news => (
        <Card>
          <Image src={news.image} />
          <Card.Content>
            <Card.Header>
              {news.header}
            </Card.Header>
            <Card.Description>
              {news.description}
            </Card.Description>
          </Card.Content>
          {news.links && news.links.length > 0 && news.links.map(link => (
            <Card.Content extra>
              <Button fluid>
                <Link to={link.path}>
                  {link.title}
                </Link>
              </Button>
            </Card.Content>
          ))}
        </Card>
      ))}
    </Card.Group>
  </div>
);
const Locations = () => (
  <div className="Locations">
    <Header
      className="Content-header"
      as="h2">
      Locations
    </Header>
    <Card.Group stackable doubling>
      <Card>
        <Image src='http://placehold.it/400x400' />
        <Card.Content>
          <Card.Header>
            News
          </Card.Header>
          <Card.Meta>
            Today's date
          </Card.Meta>
          <Card.Description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur qui deleniti asperiores, nesciunt odio quas expedita dolor consequuntur voluptates excepturi perferendis nihil sed consequatur velit et nemo! Veniam quidem, ex.
          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
  </div>
);

const Coaching = () => <p>Coaching</p>
const Membership = () => <p>Membership</p>

class App extends Component {
  constructor() {
    super();
    this.state = {
      navPanelShowing: false,
    }
  }

  toggleNavPanel = () => {
    this.setState(prevState => ({ navPanelShowing: !prevState.navPanelShowing }));
  }

  getActiveRoute = () => {
    const path = window.location.href;

    if (path.indexOf('/locations') > -1) return 1;
    else if (path.indexOf('/coaching') > -1) return 2;
    else if (path.indexOf('/membership') > -1) return 3;
    return 0;
  }

  clickThroughListItem = id => {
    document.getElementById(id).click();
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <Header
            as="h3"
            image="/dfwtt.gif"
            content="Dallas/Fort Worth Table Tennis" />
        </div>
        <div className="Contact">
          <Button.Group fluid>
            <Button>
              <Icon name="mail outline" />
              dfwtt1@gmail.com
            </Button>
            <Button>
              <Icon name="text telephone" />
              (214) 677-6265
            </Button>
          </Button.Group>
        </div>
        <Router>
          <div className="Content">
            {this.state.navPanelShowing
              ? (
                <div className="NavPanel">
                  <List divided relaxed="very">
                    <List.Item
                      className={`NavPanel-item ${this.getActiveRoute() === 0 ? 'NavPanel-item__active' : ''}`}
                      onClick={() => this.clickThroughListItem('News')}>
                      <List.Content className="NavPanel-content">
                        <Link to="/" onClick={this.toggleNavPanel}  id="News">News</Link>
                      </List.Content>
                    </List.Item>
                    <List.Item 
                      className={`NavPanel-item ${this.getActiveRoute() === 1 ? 'NavPanel-item__active' : ''}`} 
                      onClick={() => this.clickThroughListItem('Locations')}>
                      <List.Content className="NavPanel-content">
                        <Link to="/locations" onClick={this.toggleNavPanel} id="Locations">Locations</Link>
                      </List.Content>
                    </List.Item>
                    <List.Item
                      className={`NavPanel-item ${this.getActiveRoute() === 2 ? 'NavPanel-item__active' : ''}`}
                      onClick={() => this.clickThroughListItem('Coaching')}>
                      <List.Content className="NavPanel-content">
                        <Link to="/coaching" onClick={this.toggleNavPanel}  id="Coaching">Coaching</Link>
                      </List.Content>
                    </List.Item>
                    <List.Item
                      className={`NavPanel-lastItem ${this.getActiveRoute() === 3 ? 'NavPanel-item__active' : ''}`}
                      onClick={() => this.clickThroughListItem('Membership')}>
                      <List.Content className="NavPanel-content">
                        <Link to="/membership" onClick={this.toggleNavPanel}  id="Membership">Membership</Link>
                      </List.Content>
                    </List.Item>
                  </List>
                </div>
              )
              : (
                <div className="Content-routes">
                  <Route exact path="/" component={News} />
                  <Route path="/locations" component={Locations} />
                  <Route path="/coaching" component={Coaching} />
                  <Route path="/membership" component={Membership} />
                </div>
              )}
          </div>
        </Router>
        <div className="Footer">
            <Button
              className="Footer-menuButton"
              onClick={this.toggleNavPanel}
              circular>
              <Icon
                className="Footer-icon"
                name='bars' /> Menu
            </Button>
        </div>
      </div>
    );
  }
}

export default App;
