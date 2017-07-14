import React from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';
import './Contact.css';

export default props => (
  <div className="Contact">
      <Menu
        fluid
        >
        <Menu.Item
          active={props.navPanelShowing}
          as={Button}
          position="right"
          onClick={props.toggleNavPanel}>
          <Icon name="bars" />
            Menu
        </Menu.Item>
      </Menu>
  </div>
)