import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../App.css';

function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', padding: '10px' }}>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/events">Événements</Link>
            </li>
          </ul>
        </nav>
      </header>
      
      <main>
        <Suspense fallback={<div>Chargement...</div>}>
          <Outlet />
        </Suspense>
      </main>
      
      <footer style={{ marginTop: '40px', padding: '20px', textAlign: 'center' }}>
        <p>&copy; 2026 React Workshop</p>
      </footer>
    </div>
  );
}

export default RootLayout;
