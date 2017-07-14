import React from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';
import './Footer.css';

export default props => (
  <div className="Footer">
    <Menu
      attached="bottom"
      widths={2}>
      <Menu.Item onClick={() => window.location.href=`tel:${props.phone}`}>
        <Icon name="text telephone" />
        {props.phone}
      </Menu.Item>
      <Menu.Item onClick={() => window.location.href = `mailto:${props.email}`}>
        <Icon name="mail outline" />
        {props.email}
      </Menu.Item>
    </Menu>
    <Menu
      attached="bottom"
      widths={1}>
      <Menu.Item onClick={() => window.location.href = "https://www.connorbryan.com"}>
        <Icon name="heart" />
        Made with love by Connor Bryan 
      </Menu.Item>
    </Menu>
    <Menu
      attached="bottom"
      widths={1}>
      <Menu.Item onClick={() => document.body.scrollTop = document.documentElement.scrollTop = 0}>
        <Icon name="arrow up" />
        Back to the top 
      </Menu.Item>
    </Menu>
  </div>
);