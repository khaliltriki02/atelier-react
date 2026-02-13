import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Event from './Event'
import evntsJson from '../data/events.json'

export default function Events() {
  const event = {
    name: 'React Workshop',
    description: 'A workshop to learn React basics',
    imgUrl: '/images/event1.jpg',
    price: 49.99,
    nbTickets: 100,
    nbParticipants: 75,
    like: 120,
  }

  return (
    <div>
        <Row>
        {

            evntsJson.map((eventItem,i)=>(
                <Col key={i}>

                <Event eventItem={eventItem}  key={i}/>
              
                </Col>
            ))
        }

        </Row>

      
    </div>
  )
}
