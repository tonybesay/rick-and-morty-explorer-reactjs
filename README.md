# 🛸 Rick & Morty Explorer

Aplicación web desarrollada con **React** que permite explorar el universo de *Rick & Morty* a través de personajes y episodios, con filtros avanzados, sistema de favoritos y una interfaz cuidada con loaders y estados vacíos.

---

## 🚀 Demo



---

## 🧩 Funcionalidades

### 👤 Personajes
- Listado de personajes con paginación
- Filtros por:
  - Nombre
  - Estado
  - Especie
- Sistema de **favoritos** persistente (localStorage)
- Vista de detalle de personaje
- Skeleton loaders y estados vacíos
- Cards con hover y micro-interacciones

### 📺 Episodios
- Listado de episodios
- Vista de personajes por episodio
- Carga optimizada de personajes relacionados
- Skeleton loaders y estado vacío

### 🎨 UX / UI
- Diseño consistente con Tailwind CSS
- Layout responsive
- Estados de carga (skeletons)
- Estados vacíos (“No hay resultados”)
- Navegación activa en el header
- Interacciones suaves (hover, transiciones)

---

## 🛠️ Tecnologías utilizadas

- **React**
- **React Router DOM**
- **Tailwind CSS**
- **JavaScript (ES6+)**
- **Vite**
- **Rick and Morty API**
- **LocalStorage**
- **Git & GitHub**

---

## 🧠 Arquitectura del proyecto

La aplicación sigue una estructura modular y escalable, separando responsabilidades:

```txt
src/
├── api/                # Fetch y endpoints de la API
├── components/
│   ├── characters/     # Componentes relacionados con personajes
│   ├── episodes/       # Componentes relacionados con episodios
│   ├── layout/         # Header, Footer y layout general
│   └── ui/             # Componentes UI reutilizables
├── pages/              # Vistas asociadas a rutas
├── index.css           # Estilos base globales
└── main.jsx
```

## Principios aplicados:
	•	Separación entre lógica y presentación
	•	Componentes reutilizables
	•	Estados bien definidos: loading / vacío / datos
	•	Buen uso de hooks (useState, useEffect, useCallback)
	•	Navegación SPA con NavLink

## ⚙️ Instalación y uso
```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/rick-and-morty-explorer.git

# Entrar en el proyecto
cd rick-and-morty-explorer

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```
## 👨‍💻 Autor

Tony Mendoza Hernandez
Desarrollador Full Stack
	•	GitHub: https://github.com/tonybesay
