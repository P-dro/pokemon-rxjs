export interface PokemonListResponse {
    count: number;
    next: string | null;
    previus: string | null;
    results: PokemonList[];
}

interface PokemonList {
   name: string;
    url: string; 
}