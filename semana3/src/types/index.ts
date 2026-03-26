// ============================================
// TIPOS Y INTERFACES DEL PROYECTO - VETERINARIA
// ============================================

/**
 * representa una mascota dentro de la veterinaria
 * este reemplaza el "item" generico del template
 */
export interface Item {
  id: number; // identificador unico de la mascota
  name: string; // nombre de la mascota
  description: string; // descripcion general (sintomas o motivo de consulta)
  type: string; // tipo de animal (perro, gato, etc)
  status: string; // estado de salud (enfermo, en tratamiento, recuperado)
  age: number; // edad de la mascota
}

/**
 * representa las estadisticas del dashboard de la veterinaria
 */
export interface Stats {
  total: number; // total de mascotas registradas
  active: number; // mascotas actualmente en tratamiento
  percentage: number; // porcentaje de mascotas recuperadas

  // metricas especificas del dominio
  criticalPets: number; // mascotas en estado critico
  recoveredPets: number; // mascotas recuperadas
}

/**
 * representa los datos que cambian en tiempo real
 * en este caso: emergencias o mascotas en atencion
 */
export interface RealTimeData {
  value: number; // cantidad actual (ej: emergencias)
  label: string; // nombre del dato (ej: "emergencias activas")
  unit: string; // unidad (ej: "mascotas")
  lastUpdated: string; // hora de ultima actualizacion

  // campo extra para contexto
  attentionLevel: string; // nivel de urgencia (bajo, medio, alto)
}

/**
 * estado generico para manejar peticiones asincronas
 * no modificar
 */
export interface AsyncState<T> {
  data: T | null; // datos obtenidos
  loading: boolean; // indica si esta cargando
  error: string | null; // mensaje de error si falla
}

/**
 * filtros de busqueda para la lista de mascotas (opcional)
 */
export interface SearchFilters {
  query: string; // texto de busqueda (nombre de mascota)

  // filtros especificos del dominio
  type?: string; // filtrar por tipo de animal
  status?: string; // filtrar por estado de salud
}