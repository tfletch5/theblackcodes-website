import React from 'react';
import { Row, Col } from 'reactstrap';
import { events } from '../db/events';
import CardComponent from '../components/EventCard';
import JumbotronComponent from '../components/Jumbotron';

const Events = () => {
  return (
    <div>
      <JumbotronComponent pageTitle='Events Page' lead='Stay up on the latest events.' />
      <Row>
      {
        events.map((event, index) => {
          return (
            <Col key={index} md={3} xs={12} >
              <CardComponent event={event} />
              <hr />
            </Col>
          )
        })
      }
      </Row>
    </div>   
  );
}

export default Events;

