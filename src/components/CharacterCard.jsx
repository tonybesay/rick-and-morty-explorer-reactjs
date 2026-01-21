import { Link } from "react-router-dom"

export default function CharacterCard({
    character, isFavorite, onToggleFavorite,
    }){
    return (
        <article>

            <img 
                src={character.image} 
                alt={character.name} 
            />

            <h3>{character.name}</h3>

            <p>{character.species}, {character.gender}, {character.status}</p>
            
            <button onClick={() => onToggleFavorite(character.id)}>
                {isFavorite ? "Favorito" : "Marcar favorito"}
            </button>

            <div>
                <Link to={`/character/${character.id}`}>
                    Ver detalle
                </Link>
            </div>


        </article>
    )
}