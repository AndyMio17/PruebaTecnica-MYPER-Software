
# PruebaTecnica-MYPER-Software

Aplicacion web CRUD de usuarios construida con Vue 3 + Vite y PrimeVue. La lista inicial se obtiene desde la API publica de JSONPlaceholder y las operaciones de crear, editar y eliminar se realizan en memoria (sin persistencia en servidor).

## Objetivo

Desarrollar una aplicacion web en Vue.js 3 (Options API o Composition API) que implemente un sistema CRUD completo para gestionar usuarios, consumiendo la API publica:

GET https://jsonplaceholder.typicode.com/users

## Requerimientos funcionales

### 1. Listado de usuarios

- Mostrar la lista de usuarios en una tabla.
- Cada fila incluye: name, username, email, phone.
- Los datos se almacenan localmente en un array luego de ser obtenidos desde la API.
- Se muestra un indicador de carga (loading) mientras se obtiene la informacion.

### 2. Agregar usuario

- Formulario para crear nuevos usuarios.
- Validar que el correo electronico sea valido antes de guardar.
- El nuevo usuario se agrega al array local (no se envia a la API).
- El campo id se genera automaticamente siguiendo la secuencia actual.

Ejemplo de estructura:

```json
{
  "id": 11,
  "name": "Juan Perez",
  "username": "jperez",
  "email": "juan.perez@email.com",
  "phone": "(555) 123-4567"
}
```

### 3. Editar usuario

- Boton "Editar" en cada fila de la tabla.
- Al hacer clic en "Editar", se muestra un formulario con los datos actuales.
- Al guardar, se actualiza el usuario correspondiente en el array local segun su id.

### 4. Eliminar usuario

- Boton "Eliminar" en cada fila de la tabla.
- Confirmacion previa (confirm nativo o modal) antes de eliminar.
- Se elimina el usuario del array local luego de confirmar.

## Recomendaciones tecnicas

- Mostrar un loader al obtener datos desde la API.
- Usar modal para los formularios de creacion/edicion.
- Validar los campos del formulario (HTML5 o librerias como VeeValidate).
- Usar una libreria de componentes UI (PrimeVue, Element UI, BootstrapVue, etc.) o estilos propios.
- Organizar el codigo de forma clara y reutilizable, separando componentes si es necesario.

## Criterios de evaluacion

- Estructura del proyecto y uso adecuado de Vue.js.
- Manejo del estado local para CRUD.
- Buenas practicas de validacion y UX.
- Legibilidad del codigo y reutilizacion de componentes.
- Opcional: uso de Vue Router y Vuex/Pinia si se considera necesario.

## Tecnologias

- Vue 3
- Vite
- PrimeVue
- Vue Router
- Axios
- PrimeFlex

## Estructura relevante

- [src/views/UsersView.vue](src/views/UsersView.vue): logica principal del CRUD.
- [src/components/UserForm.vue](src/components/UserForm.vue): formulario de alta y edicion.
- [src/components/UserTable.vue](src/components/UserTable.vue): tabla con acciones.
- [src/router/router.js](src/router/router.js): rutas de la aplicacion.

## Estructura de carpetas

```
.
├── index.html
├── jsconfig.json
├── package.json
├── README.md
├── vite.config.js
├── public/
└── src/
	├── App.vue
	├── main.js
	├── assets/
	│   ├── base.css
	│   └── main.css
	├── components/
	│   ├── UserForm.vue
	│   └── UserTable.vue
	├── router/
	│   └── router.js
	└── views/
		├── Home.vue
		└── UsersView.vue
```

## Requisitos

- Node.js 20 o superior
- npm

## Instalacion

```sh
npm install
```

## Desarrollo

```sh
npm run dev
```

## Build de produccion

```sh
npm run build
```

## Notas

- Los cambios realizados en usuarios no se guardan al recargar la pagina.
- El listado se reinicia con los datos de la API en cada carga.

## Autor

- Andy Mio Mejia 

