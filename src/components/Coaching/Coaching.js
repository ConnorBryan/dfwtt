import React from 'react';
import { Header, Menu, Segment } from 'semantic-ui-react';

import Pricing from './components/Pricing/Pricing';
import Instructors from './components/Instructors/Instructors';

export default props => (
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
        {props.screen === 0
          ? <Pricing pricing={props.pricing} />
          : <Instructors instructors={props.instructors} />
        }
      </Segment>
  </div>
);