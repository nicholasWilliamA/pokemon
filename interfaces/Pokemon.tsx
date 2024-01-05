export interface PokemonLists{
    count: number,
    next: string,
    previous: string | null,
    results: Pokemon[],
}

interface Pokemon{
    name: string,
    url: string,
}
