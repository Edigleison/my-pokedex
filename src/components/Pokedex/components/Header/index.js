import styles from "./style.module.css";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <CatchingPokemonIcon />
        <h1 className={styles.title}>Pokédex</h1>
      </div>
    </div>
  )
}
