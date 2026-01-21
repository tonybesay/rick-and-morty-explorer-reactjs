export default function Filter({ filters, onChange }){

    return(
        <div>
            <input 
                type="text"
                placeholder="Filtro por nombre" 
                value={filters.name}
                onChange={(e) => 
                    onChange({...filters, name: e.target.value})
                }
            />
            <select 
                value={filters.status}
                onChange={(e) => 
                    onChange({...filters, status: e.target.value})
                }
            >
                <option value="">Estado</option>
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="unknown">unknwon</option>
            </select>

            <input 
                type="text"
                placeholder="Filtro por epecie" 
                value={filters.species}
                onChange={(e) => 
                    onChange({...filters, species: e.target.value})
                }
            />

            <button onClick={() => onChange({name: "", status: "", species: ""})}>
                Limpiar filtros
            </button>
        </div>
    )
}