import React from 'react'

export default function Event({ eventItem }) {
  const {
    name,
    description,
    img,
    price,
    nbTickets,
    nbParticipants,
    like,
  } = eventItem || {}

  const imgSrc = img ? `/images/${img}` : '/images/placeholder.jpg'

  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <img src={imgSrc} className="card-img-top" alt={name || 'Event'} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">Price: ${price}</p>
          <p className="card-text">Tickets: {nbTickets}</p>
          <p className="card-text">Participants: {nbParticipants}</p>
          <p className="card-text">Likes: {like ? 'Yes' : 'No'}</p>
        </div>
      </div>
    </>
  )
}
