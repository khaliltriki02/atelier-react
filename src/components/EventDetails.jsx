import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import eventsJson from '../data/events.json';

function EventDetails() {
  const { eventName } = useParams();
  const navigate = useNavigate();
  
  // Décoder le nom de l'événement depuis l'URL
  const decodedEventName = decodeURIComponent(eventName);
  
  // Trouver l'événement par son nom
  const eventItem = eventsJson.find(
    (event) => event.name.toLowerCase() === decodedEventName.toLowerCase()
  );

  const [isLiked, setIsLiked] = useState(Boolean(eventItem?.like));
  const [nbTickets, setNbTickets] = useState(eventItem?.nbTickets || 0);
  const [nbParticipants, setNbParticipants] = useState(eventItem?.nbParticipants || 0);
  const [bookingMessage, setBookingMessage] = useState('');

  if (!eventItem) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2>Événement non trouvé</h2>
        <Link to="/events" style={{ color: '#3498db', textDecoration: 'none' }}>
          Retour aux événements
        </Link>
      </div>
    );
  }

  const {
    name,
    description,
    img,
    price,
  } = eventItem;

  const imgSrc = img ? `/images/${img}` : '/images/placeholder.jpg';

  const handleToggleLike = () => {
    setIsLiked((prev) => !prev);
  };

  const handleBookEvent = () => {
    if (nbTickets > 0) {
      setNbTickets((prev) => prev - 1);
      setNbParticipants((prev) => prev + 1);
      setBookingMessage('Vous avez réservé cet événement avec succès !');
      setTimeout(() => setBookingMessage(''), 3000);
    }
  };

  return (
    <div style={{ maxWidth: '900px', margin: '30px auto', padding: '20px' }}>
      <button 
        onClick={() => navigate('/events')} 
        style={{
          marginBottom: '20px',
          padding: '10px 20px',
          backgroundColor: '#95a5a6',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        ← Retour aux événements
      </button>

      <div style={{
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        overflow: 'hidden'
      }}>
        <img 
          src={imgSrc} 
          alt={name} 
          style={{
            width: '100%',
            height: '400px',
            objectFit: 'cover'
          }}
        />
        
        <div style={{ padding: '30px' }}>
          <h1 style={{ 
            fontSize: '32px', 
            marginBottom: '20px',
            color: '#2c3e50'
          }}>
            {name}
          </h1>
          
          <p style={{ 
            fontSize: '18px', 
            lineHeight: '1.6', 
            color: '#555',
            marginBottom: '25px'
          }}>
            {description}
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginBottom: '30px',
            padding: '20px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px'
          }}>
            <div>
              <strong style={{ color: '#2c3e50' }}>Prix :</strong>
              <div style={{ fontSize: '24px', color: '#27ae60', fontWeight: 'bold' }}>
                {price} DT
              </div>
            </div>
            
            <div>
              <strong style={{ color: '#2c3e50' }}>Billets disponibles :</strong>
              <div style={{ fontSize: '24px', color: nbTickets > 0 ? '#3498db' : '#e74c3c', fontWeight: 'bold' }}>
                {nbTickets}
              </div>
            </div>
            
            <div>
              <strong style={{ color: '#2c3e50' }}>Participants :</strong>
              <div style={{ fontSize: '24px', color: '#9b59b6', fontWeight: 'bold' }}>
                {nbParticipants}
              </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={handleToggleLike}
              style={{
                padding: '12px 30px',
                backgroundColor: isLiked ? '#e74c3c' : '#3498db',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
            >
              {isLiked ? '❤️ J\'aime' : '🤍 Aimer'}
            </button>
            
            <button 
              onClick={handleBookEvent}
              disabled={nbTickets === 0}
              style={{
                padding: '12px 30px',
                backgroundColor: nbTickets === 0 ? '#95a5a6' : '#27ae60',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                fontSize: '16px',
                cursor: nbTickets === 0 ? 'not-allowed' : 'pointer',
                transition: 'background-color 0.3s'
              }}
            >
              {nbTickets === 0 ? '🔴 Complet' : '🎫 Réserver'}
            </button>
          </div>
          
          {bookingMessage && (
            <div style={{
              marginTop: '20px',
              padding: '15px',
              backgroundColor: '#d4edda',
              color: '#155724',
              borderRadius: '5px',
              border: '1px solid #c3e6cb'
            }}>
              {bookingMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
