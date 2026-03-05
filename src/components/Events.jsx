import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Event from "./Event";
import { getallEvents } from "../service/api";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getallEvents();
        setEvents(response.data || []);
      } catch (err) {
        setError("Unable to load events.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleDeleteSuccess = (deletedId) => {
    setEvents((prev) => prev.filter((event) => event.id !== deletedId));
  };

  if (loading) {
    return <p>Loading events...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <Row>
        {events.map((eventItem) => (
          <Col key={eventItem.id} className="mb-4">
            <Event eventItem={eventItem} onDeleted={handleDeleteSuccess} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
