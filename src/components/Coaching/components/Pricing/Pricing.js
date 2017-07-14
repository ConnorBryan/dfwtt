import React from 'react';
import { Item, Header } from 'semantic-ui-react';

export default props => (
  <Item.Group divided>
    {props.pricing.map((_package, i) => (
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