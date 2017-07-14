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
      title: 'About',
      path: '/about',
      value: 1,
    },
    {
      title: 'Locations',
      path: '/locations',
      value: 2,
    },
    {
      title: 'Coaching',
      path: '/coaching',
      value: 3,
    },
    {
      title: 'Membership',
      path: '/membership',
      value: 4,
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
  about: {
    summary: 'Welcome to the DFW Table Tennis (DFWTT) website.  We are one of the leading table tennis membership organizations in the nation, affiliated with the USA Table Tennis (USATT) the governing body of table tennis in the United States.',
    qualities: [
      'DFWTT is an organization that promotes, develops and implements programs for the sport of table tennis regardless of the player’s experience, through family values, excellence and quality in a sportsmanship environment in the Dallas & Fort Worth area.',
      'Our main goal is to build a stronger table tennis community in the Metroplex!  DFWTT is open to all ages, ethnicities, genders and playing levels.  Players will have the opportunity to learn on and off the table skills, make lasting friends and have lots of fun!  Come and play this amazing, popular and rapidly growing Olympic sport!',
      'DFWTT is one of the largest and well established table tennis organizations in the Dallas and Ft. Worth area.  It was established in 1996.  In the past decade DFWTT has grown from one to multiple locations and currently has over 100 active members.',
      'DFWTT multiple locations offer great playing conditions, with excellent lighting, flooring and brand new tournament tables.',
      'DFWTT has USATT certified Coaches and offers instructions at all levels – from beginners to advanced players.  We provide quality table tennis training; private and group lessons are also available. We specialize in the development and training of Junior players.',
      'DFWTT facilitates and organizes on a regular basis sanctioned and non-sanctioned Tournaments.  DFWTT member players have participated in many major national and regional table tennis tournaments.   More info can be found on the Tournaments section of the website.  Besides tournaments, DFWTT offers Leagues and Corporate challenge events as well.',
      'DFWTT has players ranging from all levels – from beginners to Elite players with over +2000 ratings.  Its players come from all over the world, namely Taiwan, China, India, Malaysia, Venezuela, Honduras, Korea, Hungary, Russia, Thailand, Vietnam, Indonesia, England, Philippines, Mexico, Japan, Sweden, Jamaica, U.S. and many other countries.  No matter what level you are at, you will always find someone of your level to play with at our locations.  Fun is always our motto!',
      'If you are new to table tennis or you are interested in joining DFWTT, please browse our website, gives us a call at 214-240-5975 or visit us during club hours (club playing location) and we’ll be happy to welcome you to our organization.  You can also email us at dfwtt1@gmail.com.',
      'DFWTT is the place where you can enjoy great table tennis, make new friends or compete!',
    ],
  },
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
      {
        image: '/daniel_rutenberg.JPG',
        name: 'Daniel Rutenberg',
        education: [
          'Bachelor Degree in Business Administration',
          'Masters in Business Administration',
          'International Direct Marketer of the Year 2007',
        ],
        background: [
          'USATT 2012 Paralympic Coach of the Year',
          'USATT Junior Advisory Committee - Member',
          'USATT Coaching Adivsory Committee - Member',
          'USATT Para Table Tennis Task Force - Staff Liaison',
          '2010-2012 USATT Paralympic National Team Coach',
          'ITTF PTT Level 1 Coach Certification',
          'ITTF PTT Course Conductor',
          'Active USATT member',
          'USATT certified Umpire',
          'USATT National Coach',
          'Specializing in Junior training',
          'USATT 2010 Paralympic Coach of the Year',
          'USATT 2009 Paralympic Coach of the Year',
          '2009 ParaPanAmerican Table Tennis Championship, Margarita Island, Venezuela - Team USA Head Coach',
          'Selected as one of five finalists for the Volunteer Coach of the Year 2005 U.S. Olympic Committee\'s (USOC)  Coach of the Year Program',
          '2005 USATT Volunteer Coach of the Year',
          '2007, 2008 and 2009 instructor at Tzu Chi Foundation U.S. - School',
          '2005-2013 Maccabi Games Team Dallas - Table Tennis Head Coach',
          '2005 & 2006 Sport Information Supervisor NCTTA and ACIU Collegiate Championship',
          '1989 Created Table Tennis Club at Syracuse University',
          '1974-1979 Played for Venezuelan Junior Table Tennis team',
        ],
      },
      {
        image: '/nelson_ramos.JPG',
        name: 'Nelson Ramos',
        education: [
          'Dallas / Ft. Worth Table Tennis Club',
          'Heights Recreation Center - Richardson, TX',
          'Irving Recreation Center - Irving, TX',
          'Jewish Community Center - Dallas, TX',
          'Lewisville Table Tennis Club - Lewisville, TX',
          'International Federation of Table Tennis since 1988',
          'United States Association of Table Tennis since 1987',
        ],
        background: [
          '2011 DFWTT Spring Open: 2nd Place - Class A Singles / 3rd Place - Class A Doubles,',
          '2011 Texas Winter Games: 3rd Place - Class A Singles / 2nd Place - Class A Doubles',
          '2010 DFWTT Fall Open: 3rd Place - Class A Singles / 2010 DFWTT Spring Open',
          '2010 Texas Winter Games: 1st Place - U2400 / 2nd Place - U2400',
          '2009 DFWTT Fall Open: 2nd Place - U2400',
          '2005 Double Ten: 1st Place - Class A Doubles',
          '2004 DFWTT Fall Open: 1st Place - Class A Singles',
          '2003 DFWTT Summer RR: 2nd Place - Class A Singles /  2nd Place - Class A Doubles',
        ],
      },
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

const About = () => (
 <div className="About">
    <Header
      className="Content-header"
      as="h2">
      About
    </Header>
    <Segment>
      <Message>
        {DFWTT.about.summary}
      </Message>
      <Header as="h3">
        Out Qualities
      </Header>
      <List bulleted divided relaxed="very">
        {DFWTT.about.qualities.map((quality, i) => (
          <List.Item key={i}>
            <List.Content>
              {quality}
            </List.Content>
          </List.Item>
        ))}
      </List>
    </Segment>
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
                  getActiveRoute={this.getActiveRoute} 
                  clickThroughListItem={this.clickThroughListItem}
                  toggleNavPanel={this.toggleNavPanel} />
              : (
                <div className="Content-routes">
                  <Route exact path="/" component={News} />
                  <Route path="/about" component={About} />
                  <Route path="/locations" component={Locations} />
                  <Route path="/coaching" render={() => <Coaching screen={this.state.coachingScreen} toggleScreen={this.toggleCoachingScreen} />} />
                  <Route path="/membership" component={Membership} />
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
