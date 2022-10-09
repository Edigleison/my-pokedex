import {Pokemon} from "../types/types";

const API_BASE_PATH = 'https://pokeapi.co/api/v2';
const MAX_ID = 905

export class Api {
  static fetchPokemon(
    id: number | null,
    onSuccess: (pokemon: Pokemon) => void,
    onError: (message: string) => void
  ) {
    let _id : number = id != null ? id : Math.floor(Math.random() * MAX_ID)
    _id = Math.max(Math.min(_id, MAX_ID), 1)

    fetch(`${API_BASE_PATH}/pokemon/${_id}`)
      .then(res => res.json())
      .then(response => {
        const pokemon: Pokemon = {
          id: response.id,
          name: response.name,
          imageUrl: response.sprites.other.dream_world.front_default || response.sprites.other.home.front_default,
          height: response.height,
          weight: response.weight,
          types: response.types.map((item: any) => ({name: item.type.name}))
        }
        onSuccess(pokemon)
      }, error => {
        onError(error.message)
      })
  }
}
