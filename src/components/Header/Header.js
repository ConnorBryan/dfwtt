import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import './Header.css';

export default props => (
  <div className="Header">
    <Link to='/'>
        <Header
          as="h3"
          image={props.logo}
          content={props.title} />
    </Link>
  </div>
);