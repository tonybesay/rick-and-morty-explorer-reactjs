export default function FavoriteToggle({ showFavorites, onToggle }) {
  return (
    <div className="flex justify-center my-6">
      <button
        onClick={onToggle}
        className={`px-4 py-2 rounded-lg transition text-md
          ${
            showFavorites
              ? "bg-gray-800 text-white hover:bg-gray-700"
              : "bg-linear-to-br from-blue-500 to-purple-600 text-white hover:bg-blue-700"
          }
        `}
      >
        {showFavorites ? "Ver todos" : "Ver Favoritos"}
      </button>
    </div>
  )
}