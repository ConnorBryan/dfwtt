import React from 'react';
import { Header, Segment, Message, Image, List } from 'semantic-ui-react';

export default props => (
 <div className="About">
    <Header
      className="Content-header"
      as="h2">
      About
    </Header>
    <Segment>
      <Message>
        <Image
          src={props.logo}
          size="large" />
        {props.about.summary}
      </Message>
      <Header as="h3">
        Our Qualities
      </Header>
      <List
        relaxed="very"
        bulleted
        divided>
        {props.about.qualities.map((quality, i) => (
          <List.Item key={i}>
            <List.Content>
              {quality}
            </List.Content>
          </List.Item>
        ))}
      </List>
    </Segment>
  </div>
);
