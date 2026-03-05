import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editEvent, getallEvents } from "../service/api";

function UpdateEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    img: "",
    price: 0,
    nbTickets: 0,
    nbParticipants: 0,
    like: false,
  });

  useEffect(() => {
    const loadEvent = async () => {
      try {
        const response = await getallEvents(id);
        if (!response.data) {
          setError("Event does not exist");
          return;
        }
        setFormData(response.data);
      } catch (err) {
        setError("Event does not exist");
      } finally {
        setLoading(false);
      }
    };

    loadEvent();
  }, [id]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const parsedValue = type === "number" ? Number(value) : value;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : parsedValue,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await editEvent(id, formData);
      navigate("/events");
    } catch (err) {
      setError("Unable to update event.");
    }
  };

  if (loading) {
    return <p>Loading event...</p>;
  }

  if (error === "Event does not exist") {
    return (
      <div className="container mt-4">
        <h3>Event does not exist</h3>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Update Event</h2>
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input className="form-control" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image File Name</label>
          <input className="form-control" name="img" value={formData.img} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input type="number" className="form-control" name="price" value={formData.price} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Tickets</label>
          <input
            type="number"
            className="form-control"
            name="nbTickets"
            value={formData.nbTickets}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Participants</label>
          <input
            type="number"
            className="form-control"
            name="nbParticipants"
            value={formData.nbParticipants}
            onChange={handleChange}
          />
        </div>
        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="like-update"
            name="like"
            checked={Boolean(formData.like)}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="like-update">
            Like
          </label>
        </div>
        <button type="submit" className="btn btn-warning">
          Update Event
        </button>
      </form>
    </div>
  );
}

export default UpdateEvent;
