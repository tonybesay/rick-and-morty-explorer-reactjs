export default function LoadMoreButton({ hasNext, onLoadMore }){

    return (
        <div className="flex justify-center my-10">
        {hasNext ? (
            <button
            onClick={onLoadMore}
            className="px-8 py-2.5 rounded-xl text-sm font-semibold text-white bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"            >
            Cargar más
            </button>
        ) : (
            <p className="text-gray-400 text-sm">No hay más páginas</p>
        )}
        </div>
    )
}