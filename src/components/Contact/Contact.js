import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import './Contact.css';

export default props => (
  <div className="Contact">
      <Button.Group fluid>
        <a href={`mailto:${props.email}`}>
          <Button>
            <Icon name="mail outline" />
            {props.email}
          </Button>
        </a>
        <Button>
          <Icon name="text telephone" />
          {props.phone}
        </Button>
      </Button.Group>
  </div>
)