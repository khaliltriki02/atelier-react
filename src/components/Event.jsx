import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { deleteEvent } from "../service/api";

export default function Event({ eventItem, onDeleted }) {
  const {
    id,
    name,
    description,
    img,
    price,
    like,
  } = eventItem || {};

  const navigate = useNavigate();
  const imgSrc = img ? `/images/${img}` : "/images/placeholder.jpg";
  const [isLiked, setIsLiked] = useState(Boolean(like));
  const [nbTickets, setNbTickets] = useState(eventItem?.nbTickets || 0);
  const [nbParticipants, setNbParticipants] = useState(eventItem?.nbParticipants || 0);
  const [bookingMessage, setBookingMessage] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const handleToggleLike = () => {
    setIsLiked((prev) => !prev);
  };

  const handleBookEvent = () => {
    if (nbTickets > 0) {
      setNbTickets((prev) => prev - 1);
      setNbParticipants((prev) => prev + 1);
      setBookingMessage("You have booked an event");
      setTimeout(() => setBookingMessage(""), 3000);
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteEvent(id);
      onDeleted?.(id);
    } catch (error) {
      setBookingMessage("Delete failed.");
      setTimeout(() => setBookingMessage(""), 3000);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={imgSrc} className="card-img-top" alt={name || 'Event'} />
        <div className="card-body">
          <h5 className="card-title">
            <NavLink
              to={`/events/${id}`}
              style={({ isActive }) => ({
                color: isActive ? "#e74c3c" : "#3498db",
                textDecoration: "none",
                fontWeight: "bold",
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
            {isLiked ? "Dislike" : "Like"}
          </button>
          <button
            type="button"
            className="btn btn-success ms-2"
            onClick={handleBookEvent}
            disabled={nbTickets === 0}
          >
            Book an event
          </button>
          <button
            type="button"
            className="btn btn-warning ms-2 mt-2"
            onClick={() => navigate(`/events/update/${id}`)}
          >
            Update Event
          </button>
          <button
            type="button"
            className="btn btn-danger ms-2 mt-2"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Delete Event"}
          </button>
          {bookingMessage && (
            <div className="alert alert-info mt-3" role="alert">
              {bookingMessage}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
