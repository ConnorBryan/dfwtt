import React from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';
import './Contact.css';

export default props => (
  <div className="Contact">
      <Menu
        fluid
        tabular>
        <Menu.Item>
          <a href={`mailto:${props.email}`}>
            <Icon name="mail outline" />
            {props.email}
          </a>
        </Menu.Item>
        <Menu.Item>
          <Icon name="text telephone" />
          {props.phone}
        </Menu.Item>
      </Menu>
  </div>
)