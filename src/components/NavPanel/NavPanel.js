import React from 'react';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';
import './NavPanel.css';

export default props => (
  <div className="NavPanel">
    <List
      relaxed="very"
      divided>
      {props.pages.map((page, i) => (
        <List.Item
          key={i}
          className={`
            ${i === props.pages.length - 1 ? 'NavPanel-lastItem' : 'NavPanel-item'}
            ${props.getActiveRoute() === page.value ? 'NavPanel-item__active' : ''}
          `}
          onClick={() => props.clickThroughListItem(page.title)}>
          <List.Content className="NavPanel-content">
            <Link
              id={page.title}
              to={page.path}
              onClick={props.toggleNavPanel} >
            {page.title}
            </Link>
          </List.Content>
        </List.Item>
      ))}
    </List>
  </div>
);