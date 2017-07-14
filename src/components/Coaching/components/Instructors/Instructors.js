import React from 'react';
import { Card, Image, Header, List } from 'semantic-ui-react';
import './Instructors.css';

export default props => (
  <Card.Group
    className="Instructors"
    doubling
    stackable>
    {props.instructors.map((instructor, i) => (
      <Card key={i}>
        <Image src={instructor.image} centered />
        <Card.Content>
          <Card.Header>
            {instructor.name}
          </Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Card.Description>
            <Header as="h4">
              Education & Experience
            </Header>
            <List>
              {instructor.education.map((item, i) => (
                <List.Item key={i}>
                  {item}
                </List.Item>
              ))}
            </List>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Card.Description>
            <Header as="h4">
              Background
            </Header>
            <List>
              {instructor.background.map((item, i) => (
                <List.Item key={i}>
                  {item}
                </List.Item>
              ))}
            </List>
          </Card.Description>
        </Card.Content>
      </Card>
    ))}
  </Card.Group>
);