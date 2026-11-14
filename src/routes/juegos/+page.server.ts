
import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

// Definimos cómo debe ser un videojuego
type Juego = {
  id: number;
  nombre: string;
  plataforma: string;
  estado: string;
  progreso: number;
};

// Datos simulados guardados en memoria del servidor
let juegos: Juego[] = [
  {
    id: 1,
    nombre: 'Minecraft',
    plataforma: 'PC',
    estado: 'Jugando',
    progreso: 65
  },
  {
    id: 2,
    nombre: 'Hollow Knight',
    plataforma: 'PC',
    estado: 'Pendiente',
    progreso: 0
  },
  {
    id: 3,
    nombre: 'Celeste',
    plataforma: 'Nintendo Switch',
    estado: 'Concluido',
    progreso: 100
  }
];

// GET: enviamos los juegos del servidor a la página
export const load: PageServerLoad = async () => {
  return {
    juegos
  };
};

// POST: recibimos los datos de un formulario
export const actions = {
  default: async ({ request }) => {
    const datos = await request.formData();

    const nombreRecibido = datos.get('nombre');
    const plataformaRecibida = datos.get('plataforma');

    const nombre =
      typeof nombreRecibido === 'string'
        ? nombreRecibido.trim()
        : '';

    const plataforma =
      typeof plataformaRecibida === 'string'
        ? plataformaRecibida.trim()
        : '';

    // Validación en el servidor
    if (!nombre || !plataforma) {
      return fail(400, {
        ok: false,
        mensaje: 'Debes completar todos los campos.',
        nombre,
        plataforma
      });
    }

    if (nombre.length > 80) {
      return fail(400, {
        ok: false,
        mensaje: 'El nombre no puede superar 80 caracteres.',
        nombre,
        plataforma
      });
    }

    const plataformasValidas = [
      'PC',
      'PlayStation',
      'Xbox',
      'Nintendo Switch'
    ];

    if (!plataformasValidas.includes(plataforma)) {
      return fail(400, {
        ok: false,
        mensaje: 'Selecciona una plataforma válida.',
        nombre,
        plataforma
      });
    }

    // Creamos un videojuego nuevo
    const nuevoJuego: Juego = {
      id: Math.max(0, ...juegos.map((juego) => juego.id)) + 1,
      nombre,
      plataforma,
      estado: 'Pendiente',
      progreso: 0
    };

    // Lo agregamos a la lista en memoria
    juegos.push(nuevoJuego);

    // Enviamos la respuesta a la página
    return {
      ok: true,
      mensaje: `¡${nombre} fue agregado correctamente!`,
      nombre: '',
      plataforma: ''
    };
  }
} satisfies Actions;
