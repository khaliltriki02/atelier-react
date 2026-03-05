import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <nav
      style={{
        backgroundColor: "#2c3e50",
        padding: "15px 30px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "24px", fontWeight: "bold", color: "white" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Ma Boutique
          </Link>
        </div>

        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "30px",
            margin: 0,
            padding: 0,
            alignItems: "center",
          }}
        >
          <li>
            <Link to="/" style={{ color: "white", textDecoration: "none", fontSize: "16px" }}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/events" style={{ color: "white", textDecoration: "none", fontSize: "16px" }}>
              Evenements
            </Link>
          </li>
          <li>
            <Link to="/events/add" style={{ color: "white", textDecoration: "none", fontSize: "16px" }}>
              Add new Event
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
