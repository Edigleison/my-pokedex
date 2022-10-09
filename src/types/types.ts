export interface PokemonType {
  name: string;
}

export interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
  height: number;
  weight: number;
  types: PokemonType[];
}
