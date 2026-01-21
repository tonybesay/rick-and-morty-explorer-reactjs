import { Link } from "react-router-dom"

export default function Header(){
    return(
        <header 
            className="border-b font-mono bg-emerald-800 text-white flex">
            <div
                className="px-2 max-w-[90%] mx-auto py-6 w-screen flex justify-between items-center">
                <div>
                    <p className="text-2xl font-semibold">
                        Rick and Morty Explore with React
                        </p>
                    <p className="subtle text-sm mt-2 text-slate-900">
                        Explora personajes, filtra por nombre/estado/especie y guarda tus favoritos.
                    </p>
                </div>
                <nav>
                    <ul className="flex gap-2 text-sm rounded p-1">
                        <li className="p-1 bg-emerald-600 hover:bg-emerald-500 rounded text-white shadow">
                            <Link to="/">
                                Inicio
                            </Link>
                        </li>
                        <li className="p-1 bg-emerald-600 hover:bg-emerald-500 rounded text-white shadow">
                            <Link to="/episodes">
                                Episodios
                            </Link>
                        </li>
                        <li className="p-1 bg-emerald-600 hover:bg-emerald-500 rounded text-white shadow">
                            <a href="">Favoritos</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}