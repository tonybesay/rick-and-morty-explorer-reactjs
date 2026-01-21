export default function LoadMoreButton({ hasNext, onLoadMore }){

    return (
        <div className="flex justify-center my-6">
        {hasNext ? (
            <button
            onClick={onLoadMore}
            className="px-6 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition"
            >
            Cargar más
            </button>
        ) : (
            <p className="text-gray-500 text-sm">No hay más páginas</p>
        )}
        </div>
    )
}