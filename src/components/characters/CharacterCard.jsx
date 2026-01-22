import { Link } from "react-router-dom"

export default function CharacterCard({
  character,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <article className="w-full h-full bg-white rounded-lg shadow-lg flex flex-col my-3 mx-2">

      {/* Imagen */}
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-48 object-cover rounded"
      />

      {/* Contenido */}
      <div className="flex flex-col flex-1 p-4 gap-2">

        <h3 className="text-lg font-semibold text-gray-800">
          {character.name}
        </h3>

        <p className="text-sm text-gray-600">
          {character.species} · {character.gender} · {character.status}
        </p>

        {/* Spacer para empujar botones abajo */}
        <div className="flex-1" />

        {/* Acciones */}
        <div className="flex items-center justify-between gap-2 mt-3">

          <button
            onClick={() => onToggleFavorite(character.id)}
            className={`px-3 py-1 text-sm rounded transition
              ${isFavorite
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"}
            `}
          >
            {isFavorite ? "❤️ Favorito" : "🤍 Favorito"}
          </button>

          <Link
            to={`/character/${character.id}`}
            className="text-sm text-blue-600 hover:underline"
          >
            Ver detalle
          </Link>

        </div>
      </div>
    </article>
  )
}