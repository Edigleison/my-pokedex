const API_BASE_PATH = 'https://pokeapi.co/api/v2';
const MAX_ID = 905

export class Api {
  static fetchPokemon(id, onSuccess, onError) {
    let _id = id != null ? id : Math.floor(Math.random() * MAX_ID);
    _id = Math.max(Math.min(_id, MAX_ID), 1);

    fetch(`${API_BASE_PATH}/pokemon/${_id}`)
      .then(res => res.json())
      .then(onSuccess, onError)
  }
}
