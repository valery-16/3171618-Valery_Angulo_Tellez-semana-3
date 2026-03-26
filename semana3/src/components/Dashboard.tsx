import React from 'react';
import { ItemList } from './ItemList';
import { StatsCard } from './StatsCard';
import { RealTimeIndicator } from './RealTimeIndicator';

// ============================================
// COMPONENTE: Dashboard (Principal)
// contenedor principal del sistema de veterinaria
// ============================================

export const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      {/* header principal */}
      <header className="dashboard-header">
        <h1>panel de control - veterinaria 🐾</h1>

        {/* boton opcional para refrescar todo */}
        <button onClick={() => window.location.reload()}>
          🔄 refrescar
        </button>
      </header>

      {/* contenido principal */}
      <main className="dashboard-main">
        {/* seccion de estadisticas */}
        <section className="dashboard-section">
          <StatsCard />
        </section>

        {/* seccion de tiempo real */}
        <section className="dashboard-section">
          <RealTimeIndicator />
        </section>

        {/* lista de mascotas */}
        <section className="dashboard-section dashboard-list">
          <ItemList />
        </section>
      </main>

      {/* footer */}
      <footer className="dashboard-footer">
        <p>dashboard veterinaria - {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};