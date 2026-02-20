import { Link } from 'react-router-dom';
import '../App.css';

function NotFound() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '50px 20px',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h1 style={{ fontSize: '72px', color: '#e74c3c', marginBottom: '20px' }}>
        404
      </h1>
      
      <div style={{ marginBottom: '30px' }}>
        <img 
          src="/images/notfound.jfif" 
          alt="Page non trouvée" 
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
          onError={(e) => {
            // Fallback si l'image n'existe pas
            e.target.style.display = 'none';
          }}
        />
      </div>
      
      <h2 style={{ fontSize: '32px', marginBottom: '15px' }}>
        Page non trouvée
      </h2>
      
      <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px' }}>
        Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      
      <Link 
        to="/" 
        style={{
          display: 'inline-block',
          padding: '12px 30px',
          backgroundColor: '#3498db',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          fontSize: '16px',
          transition: 'background-color 0.3s'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}

export default NotFound;
