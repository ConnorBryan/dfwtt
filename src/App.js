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

const DFWTT = {
  logo: '/dfwtt.gif',
  title: 'Dallas/Fort Worth Table Tennis',
  email: 'dfwtt1@gmail.com',
  phone: '(214) 240-5975',
  pages: [
    {
      title: 'News',
      path: '/',
      value: 0,
    },
    {
      title: 'Locations',
      path: '/locations',
      value: 1,
    },
    {
      title: 'Coaching',
      path: '/coaching',
      value: 2,
    },
    {
      title: 'Membership',
      path: '/membership',
      value: 3,
    },
  ],
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
  locations: [
    {
      image: '/cimarron.jpg',
      header: 'Cimarron Recreation Center',
      address: '265 Red River Trail, Irving, TX 75063',
      schedule: [
        {
          day: 'Monday',
          time: '7:30pm to 9:30pm',
        },
        {
          day: 'Saturday',
          time: '9:00am to 12:00pm',
        },
      ],
      directions: 'http://maps.google.com/maps?um=1&tab=wl&hl=en&q=265%20Red%20River%20Trail%20TX',
    },
    {
      image: '/jcc.jpg',
      header: 'Jewish Community Center',
      address: '7900 Northaven Road, Dallas, TX 75230',
      notice: {
        header: 'Parking Notice',
        content: 'Use upper level parking lots only and use the Health & Fitness Complex entrance door located on North side of building. Sign in at front desk.',
      },
      schedule: [
        {
          day: 'Monday',
          time: '6:30pm to 9:30pm',
        },
        {
          day: 'Wednesday',
          time: '6:30pm to 9:30pm',
        },
      ],
      directions: 'http://maps.google.com/maps?f=q&hl=en&geocode=&q=7900+Northaven+Road,+Dallas+75230&sll=37.0625,-95.677068&sspn=45.014453,81.738281&ie=UTF8&z=16&iwloc=addr&om=1',
    },
    {
      image: '/tbarm.jpg',
      header: 'T Bar M Racquet Club',
      address: '6060 Dilbeck Ln, Dallas, TX 75240',
      schedule: [
        {
          day: 'Saturday',
          time: '2:00pm to 5:00pm',
        },
        {
          day: 'Sunday',
          time: '2:00pm to 5:00pm',
        },
      ],
      directions: 'https://www.google.com/maps/place/6060+Dilbeck+Ln,+Dallas,+TX+75240/@32.9292,-96.8036111,17z/data=!3m1!4b1!4m5!3m4!1s0x864c20fa8be63af1:0x96164675e63cb247!8m2!3d32.9292!4d-96.8014224?hl=en',
    },
  ],
  coaching: {
    pricing: [
      {
        package: 'Junior (U-10) Group Lessons',
        price: 80,
        lessons: 4,
        players: 'minimum two players',
        length: '1 hour',
      },
      {
        package: 'Junior (U-10) One-on-One Lessons',
        price: 120,
        lessons: 4,
        players: 'one on one',
        length: '1 hour',
      },
      {
        package: 'Adult (U-10) One-on-One Lessons',
        price: 140,
        lessons: 4,
        players: 'one on one',
        length: '1 hour',
      },
    ],
    instructors: [

    ],
  },
  dropBy: 3,
  membership: [
    {
      package: 'One Month',
      single: 20,
      family2: 35,
      family3: 45,
    },
    {
      package: 'Three Months',
      single: 55,
      family2: 85,
      family3: 110,
    },
    {
      package: 'Half Year',
      single: 90,
      family2: 135,
      family3: 180,
    },
    {
      package: 'One Year (Best Deal)',
      single: 150,
      family2: 220,
      family3: 270,
    },
  ],
};

const NavPanel = props => (
  <div className="NavPanel">
    <List divided relaxed="very">
      {DFWTT.pages.map((page, i) => (
        <List.Item
          key={i}
          className={`${i === DFWTT.pages.length - 1 ? 'NavPanel-lastItem' : 'NavPanel-item'} ${props.getActiveRoute() === page.value ? 'NavPanel-item__active' : ''}`}
          onClick={() => props.clickThroughListItem(page.title)}>
          <List.Content className="NavPanel-content">
            <Link to={page.path} onClick={props.toggleNavPanel} id={page.title}>{page.title}</Link>
          </List.Content>
        </List.Item>
      ))}
    </List>
  </div>
);

const News = () => (
  <div className="News">
    <Header
      className="Content-header"
      as="h2">
      News
    </Header>
    <Card.Group stackable doubling>
      {DFWTT.news.map((news, i) => (
        <Card key={i}>
          <Image src={news.image} />
          <Card.Content>
            <Card.Header>
              {news.header}
            </Card.Header>
            <Card.Description>
              {news.description}
            </Card.Description>
          </Card.Content>
          {news.links && news.links.length > 0 && news.links.map((link, i) => (
            <Card.Content
              key={i}
              extra>
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
      {DFWTT.locations.map((location, i) => (
        <Card key={i}>
          <Image src={location.image} />
          <Card.Content>
            <Card.Header>
              {location.header}
            </Card.Header>
            <Card.Meta>
              {location.address}
            </Card.Meta>
          </Card.Content>
          {location.notice && (
            <Card.Content extra>
              <Message compact>
                <Message.Header>
                  {location.notice.header}
                </Message.Header>
                {location.notice.content}
              </Message>
            </Card.Content>
          )}
          <Card.Content extra>
            <Card.Description>
              <Header as="h4">
                Schedule
              </Header>
              <List>
                {location.schedule.map((day, i) => (
                  <List.Item key={i}>
                    <strong>{day.day}:</strong> {day.time}
                  </List.Item>
                ))}
              </List>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a href={location.directions}>
              <Button fluid>
                Get Directions
              </Button>
            </a>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  </div>
);

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
  <p>Instructors</p>
);

const Coaching = props => (
  <Router>
    <div className="Coaching">
      <Header
        className="Content-header"
        as="h2">
        Coaching
      </Header>
        <Menu attached="top">
          <Menu.Item
            active={props.screen === 0}
            onClick={props.toggleScreen}>
            Pricing
          </Menu.Item>
          <Menu.Item
            active={props.screen === 1}
            onClick={props.toggleScreen}>
            Instructors
          </Menu.Item>
        </Menu>
        <Segment attached="bottom">
          {
            props.screen === 0 ? (
              <Pricing />
            )
            : (
              <Instructors />
            )
          }
        </Segment>
    </div>
  </Router>
);

const Membership = () => (
  <div className="Membership">
    <Header
      className="Content-header"
      as="h2">
      Membership
    </Header>
    <Segment>
      <Item.Group divided>
        {DFWTT.membership.map((_package, i) => (
          <Item key={i}>
            <Item.Content>
              <Item.Header>
                {_package.package}
              </Item.Header>
              <Item.Description>
                Single: <strong>${_package.single}.00</strong>
              </Item.Description>
              <Item.Description>
                Family of two: <strong>${_package.family2}.00</strong>
              </Item.Description>
              <Item.Description>
                Family of three: <strong>${_package.family3}.00</strong>
              </Item.Description>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
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

  toggleCoachingScreen = () => {
    this.setState(prevState => ({ coachingScreen: +!prevState.coachingScreen }));
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
            image={DFWTT.logo}
            content={DFWTT.title} />
        </div>
        <div className="Contact">
          <Button.Group fluid>
            <Button>
              <Icon name="mail outline" />
              {DFWTT.email}
            </Button>
            <Button>
              <Icon name="text telephone" />
              {DFWTT.phone}
            </Button>
          </Button.Group>
        </div>
        <Router>
          <div className="Content">
            {this.state.navPanelShowing
              ? <NavPanel
                  getActiveRoute={this.getActiveRoute} 
                  clickThroughListItem={this.clickThroughListItem}
                  toggleNavPanel={this.toggleNavPanel} />
              : (
                <div className="Content-routes">
                  <Route exact path="/" component={News} />
                  <Route path="/locations" component={Locations} />
                  <Route path="/coaching" render={() => <Coaching screen={this.state.coachingScreen} toggleScreen={this.toggleCoachingScreen} />} />
                  <Route path="/membership" component={Membership} />
                </div>
              )}
          </div>
        </Router>
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
    );
  }
}

export default App;
