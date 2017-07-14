import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import './Footer.css';

export default props => (
  <div className="Footer">
    <Button
      className="Footer-menuButton"
      onClick={props.toggleNavPanel}
      toggle={props.navPanelShowing}
      circular
      primary>
      <Icon
        className="Footer-icon"
        name='bars' /> Menu
      </Button>
  </div>
);