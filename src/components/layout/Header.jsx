import { NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header className="bg-white border-b shadow-md">
      <div className="app-container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full inline-block"></span>
            <span className="text-xl font-semibold text-gray-900">Rick & Morty Explorer</span>
          </div>
          <span className="text-sm text-gray-500 mt-0.5">Explora personajes, filtra y guarda favoritos</span>

        <nav className="flex gap-8 text-sm font-medium">
          <NavLink to="/"
            className={({ isActive }) =>`hover:text-blue-600 border-b-2 transition-colors ${
                isActive
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-700"
              }`
            }
          >
            Personajes
          </NavLink>
          <NavLink to="/episodes"
            className={({ isActive }) =>`hover:text-blue-600 border-b-2 transition-colors ${
                isActive
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-700"
              }`
            }
          >
            Episodios
          </NavLink>
        </nav>
      </div>
    </header>
  )
}