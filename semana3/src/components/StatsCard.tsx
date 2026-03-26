import React, { useState, useEffect } from 'react';
import type { Stats } from '../types';
import { fetchStats } from '../utils/api';

// ============================================
// COMPONENTE: StatsCard
// muestra estadisticas de la veterinaria
// ============================================

export const StatsCard: React.FC = () => {
  // estados separados para cada metrica
  const [totalPets, setTotalPets] = useState<number>(0);
  const [activePets, setActivePets] = useState<number>(0);
  const [recoveryPercentage, setRecoveryPercentage] = useState<number>(0);

  // estado adicional
  const [criticalPets, setCriticalPets] = useState<number>(0);

  // loading general (opcional pero util)
  const [loading, setLoading] = useState<boolean>(true);

  // ============================================
  // efecto 1: cargar total de mascotas
  // ============================================
  useEffect(() => {
    const loadTotal = async () => {
      const data: Stats = await fetchStats();
      setTotalPets(data.total);
    };

    loadTotal();
  }, []);

  // ============================================
  // efecto 2: cargar mascotas activas
  // ============================================
  useEffect(() => {
    const loadActive = async () => {
      const data: Stats = await fetchStats();
      setActivePets(data.active);
    };

    loadActive();
  }, []);

  // ============================================
  // efecto 3: cargar porcentaje de recuperacion
  // ============================================
  useEffect(() => {
    const loadPercentage = async () => {
      const data: Stats = await fetchStats();
      setRecoveryPercentage(data.percentage);
      setLoading(false); // desactivar loading al final
    };

    loadPercentage();
  }, []);

  // ============================================
  // efecto 4: cargar mascotas criticas (extra)
  // ============================================
  useEffect(() => {
    const loadCritical = async () => {
      const data: Stats = await fetchStats();
      setCriticalPets(data.criticalPets);
    };

    loadCritical();
  }, []);

  // mostrar loading
  if (loading) {
    return (
      <div className="stats-card">
        <h2>cargando estadísticas...</h2>
      </div>
    );
  }

  // render principal
  return (
    <div className="stats-card">
      <h2>estadísticas de la veterinaria</h2>

      <div className="stats-grid">
        {/* total de mascotas */}
        <div className="stat">
          <div className="stat-value">{totalPets}</div>
          <div className="stat-label">total mascotas</div>
        </div>

        {/* mascotas en tratamiento */}
        <div className="stat">
          <div className="stat-value">{activePets}</div>
          <div className="stat-label">en tratamiento</div>
        </div>

        {/* porcentaje de recuperacion */}
        <div className="stat">
          <div className="stat-value">{recoveryPercentage}%</div>
          <div className="stat-label">recuperación</div>
        </div>

        {/* mascotas criticas */}
        <div className="stat">
          <div className="stat-value">{criticalPets}</div>
          <div className="stat-label">casos críticos</div>
        </div>
      </div>
    </div>
  );
};