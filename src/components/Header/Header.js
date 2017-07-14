import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Image, Menu } from 'semantic-ui-react';
import './Header.css';

export default props => (
  <div className="Header">
    <Menu
      className="Header-menu"
      attached="top"
      fluid>
      <Menu.Item>
        <Link to="/">
          <Image src={props.logo} size="tiny" />
        </Link>
      </Menu.Item>
      <Link
        className="Header-title"
        to="/">
          <Header as="h3">
            {props.title}
          </Header>
        </Link>
    </Menu>
  </div>
);