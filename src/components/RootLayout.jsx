import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import "../App.css";
import NavigationBar from "./Navbar";

function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <NavigationBar />
      </header>

      <main>
        <Suspense fallback={<div>Chargement...</div>}>
          <Outlet />
        </Suspense>
      </main>

      <footer style={{ marginTop: "40px", padding: "20px", textAlign: "center" }}>
        <p>&copy; 2026 React Workshop</p>
      </footer>
    </div>
  );
}

export default RootLayout;
