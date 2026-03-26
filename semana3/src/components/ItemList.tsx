import React, { useState, useEffect } from 'react';
import type { Item } from '../types';
import { fetchItems } from '../utils/api';

// ============================================
// COMPONENTE: ItemList
// lista de mascotas de la veterinaria
// ============================================

export const ItemList: React.FC = () => {
  // estado para guardar las mascotas
  const [items, setItems] = useState<Item[]>([]);

  // estado para indicar si esta cargando
  const [loading, setLoading] = useState<boolean>(true);

  // estado para manejar errores
  const [error, setError] = useState<string | null>(null);

  // efecto que se ejecuta al montar el componente
  useEffect(() => {
    // crear controlador para poder cancelar la peticion
    const controller = new AbortController();

    // funcion asincrona para obtener los datos
    const loadItems = async () => {
      try {
        setLoading(true); // activar loading
        setError(null); // limpiar errores previos

        // llamar a la api con la señal de cancelacion
        const data = await fetchItems(controller.signal);

        setItems(data); // guardar datos en el estado
      } catch (err: any) {
        // evitar error si la peticion fue cancelada
        if (err.name !== 'AbortError') {
          setError(err.message || 'error al cargar datos');
        }
      } finally {
        setLoading(false); // desactivar loading
      }
    };

    loadItems(); // ejecutar la funcion

    // cleanup: cancelar la peticion si el componente se desmonta
    return () => {
      controller.abort();
    };
  }, []); // array vacio: solo se ejecuta una vez

  // mostrar loading
  if (loading) {
    return (
      <div className="item-list">
        <h2>cargando mascotas...</h2>
      </div>
    );
  }

  // mostrar error
  if (error) {
    return (
      <div className="item-list error">
        <h2>error al cargar mascotas</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>
          reintentar
        </button>
      </div>
    );
  }

  // render principal
  return (
    <div className="item-list">
      <h2>lista de mascotas</h2>

      <p className="item-count">
        total: {items.length} mascotas
      </p>

      <ul className="items">
        {items.map((item) => (
          <li key={item.id} className="item-card">
            <h3>{item.name}</h3>
            <p>{item.description}</p>

            {/* datos especificos de la veterinaria */}
            <p><strong>tipo:</strong> {item.type}</p>
            <p><strong>estado:</strong> {item.status}</p>
            <p><strong>edad:</strong> {item.age} años</p>
          </li>
        ))}
      </ul>
    </div>
  );
};