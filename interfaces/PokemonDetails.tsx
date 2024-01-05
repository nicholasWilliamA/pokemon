export interface PokemonDetails{
    id: number,
    name: string,
    base_experience: number,
    height: number,
    is_default: boolean,
    order: number,
    weight: number,
    abilities: Abilities[],
    forms: Template[],
    game_indices: Game_Indices[],
    held_items: Held_Items,
    location_area_encounters: string,
    moves: Moves[],
    species: Template,
    sprites: Sprites,
    stats: Stats[],
    types:Types[],
    past_types:[],
}

interface Abilities{
    is_hidden: boolean,
    slot: number,
    ability: Template
}

export interface Template{
    name: string,
    url: string,
}

interface Game_Indices{
    game_index: number,
    version: Template[],
}

interface Held_Items{
    item: Template,
    version_details: Version_Details[],
}

interface Version_Details{
    rarity: string,
    version: Template
}

interface Moves{
    move: Template,
    version_group_details: Version_Group_Details[]
}

interface Version_Group_Details{
    level_learned_at: number,
    version_group: Template,
    move_learn_method: Template,
}

interface Sprites{
    back_default: string,
    back_female: string,
    back_shiny: string,
    back_shiny_female: string,
    front_default: string,
    front_female: string,
    front_shiny: string,
    front_shiny_female: string,
}

interface Stats{
    base_stat: number,
    effort: number,
    stat: Template,
}

interface Types{
    slot: number,
    type: Template,
}
