# Proyecto Week 03: Dashboard Veterinaria

## Descripción

Este proyecto consiste en la construcción de un dashboard interactivo en React que gestiona datos en tiempo real utilizando el hook `useEffect`.

El sistema está adaptado al dominio de una veterinaria, permitiendo visualizar información relevante como:

* Lista de mascotas o pacientes
* Estadísticas de atención
* Indicadores en tiempo real

---

## Dominio: Veterinaria

La aplicación simula el funcionamiento de una clínica veterinaria donde se monitorean:

* Mascotas registradas
* Atenciones del día
* Casos críticos
* Consultas activas en tiempo real

---

## Objetivos de Aprendizaje

Durante el desarrollo de este proyecto se aplicaron los siguientes conceptos:

* Uso de `useEffect` para fetch de datos
* Implementación de polling con `setInterval`
* Manejo de múltiples efectos en un componente
* Estados de `loading`, `error` y `data`
* Cancelación de peticiones con `AbortController`
* Limpieza de efectos para evitar memory leaks

---

## Arquitectura del Proyecto

El proyecto está dividido en los siguientes componentes:

### 1. Dashboard

Componente principal que organiza toda la interfaz.

### 2. ItemList

Muestra la lista de mascotas registradas en la veterinaria.

* Fetch inicial de datos
* Manejo de loading y errores
* Uso de AbortController

### 3. StatsCard

Muestra estadísticas clave:

* Total de mascotas
* Mascotas atendidas hoy
* Casos críticos

Cada estadística se maneja con un `useEffect` independiente.

### 4. RealTimeIndicator

Indicador en tiempo real que muestra:

* Consultas activas
* Última actualización

Implementa polling cada 5 segundos.

---

## Tecnologías Utilizadas

* React
* TypeScript
* Hooks (`useEffect`, `useState`)
* Fetch API
* AbortController

---


## Funcionalidades Implementadas

### Fetch de Datos Inicial

Se cargan las mascotas al montar el componente usando `useEffect`.

### Polling en Tiempo Real

El sistema actualiza automáticamente las consultas activas cada 5 segundos.

### Manejo de Estados

Cada componente maneja correctamente:

* Loading
* Error
* Datos

### Cleanup de Efectos

Se implementa limpieza para:

* Cancelar peticiones (`AbortController`)
* Limpiar intervalos (`clearInterval`)

---

## Testing Manual

Se verificaron los siguientes escenarios:

* Carga inicial de datos
* Actualización automática en tiempo real
* Manejo de errores
* Cancelación de peticiones al desmontar
* Ausencia de memory leaks

---

## Decisiones Técnicas

* Se utilizaron datos mock para simular una API
* Se separaron responsabilidades por componente
* Se priorizó claridad y mantenimiento del código
* Se implementaron múltiples `useEffect` para cumplir con los requisitos

---

## Posibles Mejoras

* Implementar búsqueda de mascotas
* Agregar botón de recarga manual
* Mejorar estilos con CSS o Tailwind
* Notificaciones en tiempo real

---

## Autor

Proyecto desarrollado por: Valery Angulo Tellez



Este proyecto fue desarrollado como parte de la Week 03, enfocado en el manejo de efectos en React y actualización de datos en tiempo real.
