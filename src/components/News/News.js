import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Card, Image, Button } from 'semantic-ui-react';

export default props => (
  <div className="News">
    <Header
      className="Content-header"
      as="h2">
      News
    </Header>
    <Card.Group
      doubling
      stackable>
      {props.news.map((news, i) => (
        <Card key={i}>
          <Image src={news.image} />
          <Card.Content>
            <Card.Header>
              {news.header}
            </Card.Header>
            <Card.Description>
              {news.description}
            </Card.Description>
          </Card.Content>
          {news.links && 
            news.links.length > 0 &&
            news.links.map((link, i) => (
            <Card.Content
              key={i}
              extra>
              <Button
                fluid>
                <Link to={link.path}>
                  {link.title}
                </Link>
              </Button>
            </Card.Content>
            ))}
        </Card>
      ))}
    </Card.Group>
  </div>
);