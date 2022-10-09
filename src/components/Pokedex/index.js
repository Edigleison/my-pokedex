import styles from "./style.module.css";
import {Header} from "./components/Header";
import {Display} from "./components/Display";
import {useEffect, useState} from "react";
import {Api} from "../../services/api";
import {Identification} from "./components/Identification";
import {Loading} from "./components/Loading";
import {Controls} from "./components/Controls";
import {Error} from "./components/Error";

export const Pokedex = () => {
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(1)
  }, [])

  const handleRandom = () => {
    fetch(null)
  }

  const handleNext = () => {
    const id = pokemon.id + 1;
    fetch(id)
  }

  const handlePreview = () => {
    const id = pokemon.id - 1
    fetch(id)
  }

  const fetch = (id) => {
    setPokemon(null)
    setError(null)
    setLoading(true)
    Api.fetchPokemon(id, handleFetchSuccess, handleFetchError)
  }

  const handleFetchSuccess = data => {
    setPokemon({
      id: data.id,
      name: data.name,
      imageUrl: data.sprites.other.dream_world.front_default || data.sprites.other.home.front_default,
      height: data.height,
      weight: data.weight,
      types: data.types?.map(i => i.type?.name)
    })
    setLoading(false)
  }

  const handleFetchError = errorData => {
    console.log(errorData)
    setError(errorData.message)
    setLoading(false)
  }

  return (
    <div className={styles.container}>
      <Header/>
      <Display>
        {loading && <Loading />}
        {error && <Error message={error}></Error>}
        {pokemon && <Identification
          id={pokemon.id}
          name={pokemon.name}
          imageUrl={pokemon.imageUrl}
          height={pokemon.height}
          weight={pokemon.weight}
          types={pokemon.types}
        />}
      </Display>
      <Controls
        onRandom={handleRandom}
        onPreview={handlePreview}
        onNext={handleNext}
      ></Controls>
    </div>
  )
}
