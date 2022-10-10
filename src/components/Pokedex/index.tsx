import styles from "./style.module.css";
import {Header} from "./components/Header";
import {Display} from "./components/Display";
import {useEffect, useState} from "react";
import {Identification} from "./components/Identification";
import {Loading} from "./components/Loading";
import {Controls} from "./components/Controls";
import {Api} from "../../services/api";
import {Pokemon} from "../../types/types";
import {ErrorAlert} from "./components/ErrorAlert";

export const Pokedex = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch(1)
  }, [])

  const handleRandom = () => {
    fetch(null)
  }

  const handleNext = () => {
    const id = (pokemon?.id || 0) + 1
    fetch(id)
  }

  const handlePreview = () => {
    const id = (pokemon?.id || 0) - 1
    fetch(id)
  }

  const fetch = (id: number | null) => {
    setPokemon(null)
    setError(null)
    setLoading(true)
    Api.fetchPokemon(id, handleFetchSuccess, handleFetchError)
  }

  const handleFetchSuccess = (pokemon: Pokemon) => {
    setPokemon(pokemon)
    setLoading(false)
  }

  const handleFetchError = (errorMessage: string) => {
    setError(errorMessage)
    setLoading(false)
  }

  return (
    <div className={styles.container}>
      <Header/>

      <Display>
        {loading && <Loading/>}
        {error && <ErrorAlert message={error}></ErrorAlert>}
        {pokemon && <Identification pokemon={pokemon}/>}
      </Display>

      <Controls
        onRandom={handleRandom}
        onPreview={handlePreview}
        onNext={handleNext}
      ></Controls>
    </div>
  )
}
