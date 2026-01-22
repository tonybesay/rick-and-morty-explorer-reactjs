import { Link } from "react-router-dom"

export default function CharacterCard({
  character,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <article className="w-full h-[90%] bg-white rounded-xl border shadow-lg transition-all duration-200 ease-out hover:shadow-xl hover:-translate-y-1 flex flex-col group">

      {/* Imagen */}
      <div className="overflow-hidden rounded-t-xl">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 p-4 gap-2">

        <h3 className="text-lg font-semibold text-gray-800">
          {character.name}
        </h3>

        <p className="text-sm text-gray-500">
          {character.species} · {character.gender} · {character.status}
        </p>

        {/* Spacer para empujar botones abajo */}
        <div className="flex-1" />

        {/* Acciones */}
        <div className="flex items-center justify-between gap-2 mt-3">

          <button
            onClick={() => onToggleFavorite(character.id)}
            className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
              isFavorite
                ? "bg-red-100 text-red-600 hover:bg-red-200"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {isFavorite ? "❤️ Favorito" : "🤍 Favorito"}
          </button>

          <Link
            to={`/character/${character.id}`}
            className="text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            Ver detalle
          </Link>

        </div>
      </div>
    </article>
  )
}