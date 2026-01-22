export default function CharacterFilters({ filters, onChange }){

    return(
        <div className="bg-white rounded-xl border shadow-lg max-w-4xl mx-auto p-6">            
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <input 
                    type="text"
                    placeholder="Filtro por nombre" 
                    value={filters.name}
                    onChange={(e) => 
                        onChange({...filters, name: e.target.value})
                    }
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                />
                <select 
                    value={filters.status}
                    onChange={(e) => 
                        onChange({...filters, status: e.target.value})
                    }
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
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
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                />
                
                <div className="flex justify-center">
                    <button 
                        onClick={() => onChange({name: "", status: "", species: ""})}
                        className="px-6 py-2 text-sm font-medium rounded-lg bg-gray-300 text-gray-700 hover:bg-gray-200 transition-colors"
                        >                
                        Limpiar filtros
                    </button>
                </div>
            </div>

        </div>
    )
}