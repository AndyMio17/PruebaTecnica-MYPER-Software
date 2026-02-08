# PruebaTecnica-MYPER-Software

Aplicacion web CRUD de usuarios construida con Vue 3 + Vite y componentes de PrimeVue. La lista inicial se obtiene desde la API publica de JSONPlaceholder y las operaciones de crear, editar y eliminar se realizan en memoria (sin persistencia en servidor).

## Caracteristicas

- Listado de usuarios con paginacion y estilo PrimeVue.
- Crear, editar y eliminar usuarios desde un formulario.
- Carga inicial desde `https://jsonplaceholder.typicode.com/users`.
- Navegacion entre Home y Usuarios con Vue Router.

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

- Node.js 18 o superior
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

- Andy Mio
