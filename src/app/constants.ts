/* eslint-disable @typescript-eslint/no-redeclare */
export const API_URL = `${import.meta.env.SITE}${import.meta.env.BASE_URL}api/`;

export const REMOTE_ASSETS_BASE_URL = `https://flowbite-admin-dashboard.vercel.app`;

export const SITE_TITLE = 'Dashboard de Turismo';

export const DEFAULT_CURRENCY = 'EUR'; // Para definir una moneda por defecto en el sector turismo.

export const DEFAULT_LANGUAGE = 'es'; // Definir el idioma por defecto para los usuarios en España.

export const OPEN_API_URL = 'https://api.openai.com/v1/completions';
export const API_KEY = import.meta.env.OPENAI_API_KEY;



/* Useful flag for sourcing from `./data` entirely, disabling randomize layer */
export const RANDOMIZE = Boolean(import.meta.env.RANDOMIZE) || true;

// NOTE: Unmapped
export const SIDEBAR = [
  {
    title: 'Inicio',
    pages: [
      { title: 'Resumen' },
      { title: 'Estadísticas' },
      { title: 'Últimas Reservas' },
    ],
  },
  {
    title: 'Destinos',
    pages: [
      { title: 'Explorar' },
      { title: 'Recomendaciones' },
      { title: 'Popularidad' },
    ],
  },
  {
    title: 'Ofertas',
    pages: [
      { title: 'Promociones Actuales' },
      { title: 'Descuentos por Temporada' },
    ],
  },
  {
    title: 'Asistencia',
    pages: [
      { title: 'Chatbot de Ayuda' },
      { title: 'FAQ' },
    ],
  },
];
