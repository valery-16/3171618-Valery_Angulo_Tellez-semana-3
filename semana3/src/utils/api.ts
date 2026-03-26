import type { Item, Stats, RealTimeData } from '../types';

// simula delay de red
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

// ============================================
// ITEMS (mascotas)
// ============================================
export const fetchItems = async (): Promise<Item[]> => {
  await delay(1000);

  return [
    {
      id: 1,
      name: 'Firulais',
      description: 'Fiebre y decaimiento',
      type: 'Perro',
      status: 'En tratamiento',
      age: 5
    },
    {
      id: 2,
      name: 'Michi',
      description: 'Problemas digestivos',
      type: 'Gato',
      status: 'En observación',
      age: 3
    },
    {
      id: 3,
      name: 'Luna',
      description: 'Control post cirugía',
      type: 'Perro',
      status: 'Recuperado',
      age: 4
    }
  ];
};

// ============================================
// STATS
// ============================================
export const fetchStats = async (): Promise<Stats> => {
  await delay(800);

  return {
    total: 20,
    active: 8,
    percentage: 60,
    criticalPets: 2,
    recoveredPets: 10
  };
};

// ============================================
// REAL TIME
// ============================================
export const fetchRealTimeData = async (): Promise<RealTimeData> => {
  await delay(500);

  return {
    value: Math.floor(Math.random() * 5) + 1,
    label: 'Emergencias activas',
    unit: 'mascotas',
    lastUpdated: new Date().toISOString(),
    attentionLevel: 'medio'
  };
};