import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Event({ eventItem }) {
  const {
    name,
    description,
    img,
    price,
    like,
  } = eventItem || {}

  const imgSrc = img ? `/images/${img}` : '/images/placeholder.jpg'
  const [isLiked, setIsLiked] = useState(Boolean(like))
  const [nbTickets, setNbTickets] = useState(eventItem?.nbTickets || 0)
  const [nbParticipants, setNbParticipants] = useState(eventItem?.nbParticipants || 0)
  const [bookingMessage, setBookingMessage] = useState('')

  const handleToggleLike = () => {
    setIsLiked((prev) => !prev)
  }

  const handleBookEvent = () => {
    if (nbTickets > 0) {
      setNbTickets((prev) => prev - 1)
      setNbParticipants((prev) => prev + 1)
      setBookingMessage('You have booked an event')
      // Clear the message after 3 seconds
      setTimeout(() => setBookingMessage(''), 3000)
    }
  }

  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <img src={imgSrc} className="card-img-top" alt={name || 'Event'} />
        <div className="card-body">
          <h5 className="card-title">
            <NavLink 
              to={`/events/${encodeURIComponent(name)}`}
              style={({ isActive }) => ({
                color: isActive ? '#e74c3c' : '#3498db',
                textDecoration: 'none',
                fontWeight: 'bold'
              })}
            >
              {name}
            </NavLink>
          </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">Price: ${price}</p>
          <p className="card-text">Tickets: {nbTickets}</p>
          <p className="card-text">Participants: {nbParticipants}</p>
          <button type="button" className="btn btn-primary" onClick={handleToggleLike}>
            {isLiked ? 'Dislike' : 'Like'}
          </button>
          <button 
            type="button" 
            className="btn btn-success ms-2" 
            onClick={handleBookEvent}
            disabled={nbTickets === 0}
          >
            Book an event
          </button>
          {bookingMessage && (
            <div className="alert alert-info mt-3" role="alert">
              {bookingMessage}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
