import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getallEvents } from "../service/api";

function EventDetails() {
  const { id } = useParams();
  const [eventItem, setEventItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await getallEvents(id);
        setEventItem(response.data || null);
      } catch (err) {
        setEventItem(null);
        setError("Event does not exist");
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return <p>Loading event...</p>;
  }

  if (error || !eventItem) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>Event does not exist</h2>
        <Link to="/events" style={{ color: "#3498db", textDecoration: "none" }}>
          Back to events
        </Link>
      </div>
    );
  }

  const { name, description, img, price, nbTickets, nbParticipants } = eventItem;
  const imgSrc = img ? `/images/${img}` : "/images/placeholder.jpg";

  return (
    <div style={{ maxWidth: "900px", margin: "30px auto", padding: "20px" }}>
      <Link to="/events" className="btn btn-secondary mb-3">
        Back to events
      </Link>

      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          overflow: "hidden",
        }}
      >
        <img
          src={imgSrc}
          alt={name}
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
          }}
        />

        <div style={{ padding: "30px" }}>
          <h1 style={{ fontSize: "32px", marginBottom: "20px", color: "#2c3e50" }}>{name}</h1>
          <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#555", marginBottom: "25px" }}>
            {description}
          </p>
          <p>
            <strong>Price:</strong> {price}
          </p>
          <p>
            <strong>Tickets:</strong> {nbTickets}
          </p>
          <p>
            <strong>Participants:</strong> {nbParticipants}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
