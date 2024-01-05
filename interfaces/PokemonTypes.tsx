import { Template } from './PokemonDetails'

export interface PokemonGender{
    id: number,
    name: string,
    pokemon_species_details: PokemonSpeciesDetails,
    required_for_evolution: Template[],
}

interface PokemonSpeciesDetails{
    rate: number,
    pokemon_species: Template,
}
