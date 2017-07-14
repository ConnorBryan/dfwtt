import React from 'react';
import { Header, Segment, Item } from 'semantic-ui-react';

export default props => (
  <div className="Membership">
    <Header
      className="Content-header"
      as="h2">
      Membership
    </Header>
    <Segment>
      <Item.Group divided>
         {props.membership.map((_package, i) => (
          <Item key={i}>
            <Item.Content>
              <Item.Header>
                {_package.package}
              </Item.Header>
              <Item.Description>
                Single: <strong>${_package.single}.00</strong>
              </Item.Description>
              <Item.Description>
                Family of two: <strong>${_package.family2}.00</strong>
              </Item.Description>
              <Item.Description>
                Family of three: <strong>${_package.family3}.00</strong>
              </Item.Description>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  </div>
);