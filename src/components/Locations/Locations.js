import React from 'react';
import { Header, Card, Image, Button, Message, List } from 'semantic-ui-react';

export default props => (
  <div className="Locations">
    <Header
      className="Content-header"
      as="h2">
      Locations
    </Header>
    <Card.Group
        doubling
        stackable>
      {props.locations.map((location, i) => (
        <Card key={i}>
          <Image src={location.image} />
          <Card.Content>
            <Card.Header>
              {location.header}
            </Card.Header>
            <Card.Meta>
              {location.address}
            </Card.Meta>
          </Card.Content>
          {location.notice && (
            <Card.Content extra>
              <Message compact>
                <Message.Header>
                  {location.notice.header}
                </Message.Header>
                {location.notice.content}
              </Message>
            </Card.Content>
          )}
          <Card.Content extra>
            <Card.Description>
              <Header as="h4">
                Schedule
              </Header>
              <List>
                {location.schedule.map((day, i) => (
                  <List.Item key={i}>
                    <strong>{day.day}:</strong> {day.time}
                  </List.Item>
                ))}
              </List>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a href={location.directions}>
              <Button fluid>
                Get Directions
              </Button>
            </a>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  </div>
);