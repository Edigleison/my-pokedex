import styles from "./style.module.css"
import {Photo} from "../Photo";

const capitalize = (name) => {
  const lower = name.toLowerCase();
  return name.charAt(0).toUpperCase() + lower.slice(1);
}

const Attribute = ({label, value}) => {
  return (
    <div className={styles.attributeContainer}>
      <span className={styles.attributeLabel}>{label}:</span>
      <span className={styles.attributeValue}>{value}</span>
    </div>
  )
}

const Types = ({values = []}) => {

  return (
    <div className={styles.typesContainer}>
      {values.map(type => <span className={[styles.typeValue, styles[`type_${type}`]].join(' ')}>{capitalize(type)}</span>)}
    </div>
  )
}

export const Identification = ({
  id,
  name,
  imageUrl,
  height,
  weight,
  types= []
}) => {

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.topLeftContainer}>
          <Photo imageUrl={imageUrl}/>
        </div>

        <div className={styles.topRightContainer}>
          <Attribute label="Height" value={height}></Attribute>
          <Attribute label="Weight" value={weight}></Attribute>
          <Types values={types} />
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <span className={styles.name}>{`#${id} - ${capitalize(name)}`}</span>
      </div>
    </div>
  )
}
