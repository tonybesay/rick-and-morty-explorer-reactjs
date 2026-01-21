export default function CharacterFilters({ filters, onChange }){

    return(
        <div className="p-4 bg-gray-100 rounded-md shadow-md max-w-4xl w-full mx-auto">            
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-4">
                <input 
                    type="text"
                    placeholder="Filtro por nombre" 
                    value={filters.name}
                    onChange={(e) => 
                        onChange({...filters, name: e.target.value})
                    }
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select 
                    value={filters.status}
                    onChange={(e) => 
                        onChange({...filters, status: e.target.value})
                    }
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Estado</option>
                    <option value="Alive">Alive</option>
                    <option value="Dead">Dead</option>
                    <option value="unknown">unknwon</option>
                </select>
                <input 
                    type="text"
                    placeholder="Filtro por especie" 
                    value={filters.species}
                    onChange={(e) => 
                        onChange({...filters, species: e.target.value})
                    }
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="flex justify-center">
                <button 
                    onClick={() => onChange({name: "", status: "", species: ""})}
                    className="w-1/3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >                
                    Limpiar filtros
                </button>
            </div>
        </div>
    )
}