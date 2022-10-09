import {FunctionComponent} from "react";
import styles from "./style.module.css"
import {Photo} from "../Photo";
import {Pokemon, PokemonType} from "../../../../types/types";

const capitalize = (name: string) => {
  const lower = name.toLowerCase();
  return name.charAt(0).toUpperCase() + lower.slice(1);
}

interface AttributeProps {
  label: string;
  value: string | number;
}

const Attribute: FunctionComponent<AttributeProps> = ({
  label,
  value
}) => {
  return (
    <div className={styles.attributeContainer}>
      <span className={styles.attributeLabel}>{label}:</span>
      <span className={styles.attributeValue}>{value}</span>
    </div>
  )
}

interface TypesProps{
  values: PokemonType[]
}

const Types: FunctionComponent<TypesProps> = ({
  values
}) => {
  return (
    <div className={styles.typesContainer}>
      {values.map(type => <span className={[styles.typeValue, styles[`type_${type.name}`]].join(' ')}>{capitalize(type.name)}</span>)}
    </div>
  )
}

interface IdentificationProps {
  pokemon: Pokemon
}

export const Identification: FunctionComponent<IdentificationProps> = ({
  pokemon
}) => {

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.topLeftContainer}>
          <Photo imageUrl={pokemon.imageUrl}/>
        </div>

        <div className={styles.topRightContainer}>
          <Attribute label="Height" value={pokemon.height}></Attribute>
          <Attribute label="Weight" value={pokemon.weight}></Attribute>
          <Types values={pokemon.types} />
        </div>
      </div>

      <div className={styles.bottomContainer}>
        <span className={styles.name}>{`#${pokemon.id} - ${capitalize(pokemon.name)}`}</span>
      </div>
    </div>
  )
}
