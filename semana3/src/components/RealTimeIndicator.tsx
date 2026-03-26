import React, { useState, useEffect } from 'react';
import type { RealTimeData } from '../types';
import { fetchRealTimeData } from '../utils/api';

// intervalo de actualizacion (5 segundos)
const POLLING_INTERVAL = 5000;

// ============================================
// COMPONENTE: RealTimeIndicator
// muestra emergencias en tiempo real en la veterinaria
// ============================================

export const RealTimeIndicator: React.FC = () => {
  // estado para los datos en tiempo real
  const [data, setData] = useState<RealTimeData | null>(null);

  // estado para loading inicial
  const [loading, setLoading] = useState<boolean>(true);

  // estado para saber si se esta actualizando
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  // efecto para polling
  useEffect(() => {
    // funcion para cargar datos
    const loadData = async () => {
      try {
        setIsUpdating(true); // activar indicador de actualizacion

        const newData = await fetchRealTimeData();

        setData(newData); // guardar datos
        setLoading(false); // quitar loading inicial
      } catch (err) {
        console.error('error cargando datos en tiempo real:', err);
      } finally {
        setIsUpdating(false); // desactivar indicador
      }
    };

    loadData(); // llamada inicial (importante)

    // intervalo para polling
    const intervalId = setInterval(() => {
      console.log('actualizando datos en tiempo real...');
      loadData();
    }, POLLING_INTERVAL);

    // cleanup: limpiar el intervalo al desmontar
    return () => {
      clearInterval(intervalId);
      console.log('polling detenido');
    };
  }, []);

  // helper para formatear hora
  const formatTimestamp = (time: string): string => {
    return new Date(time).toLocaleTimeString();
  };

  // loading inicial
  if (loading) {
    return (
      <div className="realtime-indicator">
        <h2>cargando datos en tiempo real...</h2>
      </div>
    );
  }

  // si no hay datos
  if (!data) return null;

  // render principal
  return (
    <div className="realtime-indicator">
      <div className="realtime-header">
        <h2>emergencias en tiempo real</h2>

        {/* indicador visual */}
        {isUpdating && (
          <span className="updating-badge">actualizando...</span>
        )}
      </div>

      <div className="realtime-content">
        {/* valor principal */}
        <div className="realtime-value">
          {data.value} {data.unit}
        </div>

        {/* descripcion */}
        <div className="realtime-label">{data.label}</div>

        {/* timestamp */}
        <div className="realtime-timestamp">
          última actualización: {formatTimestamp(data.lastUpdated)}
        </div>

        {/* info extra */}
        <div className="next-update">
          próxima actualización en {POLLING_INTERVAL / 1000} segundos
        </div>
      </div>
    </div>
  );
};