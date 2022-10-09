import styles from "./style.module.css";

export const Photo = ({imageUrl, small = false}) => {
  const imageHeight = small ? 30 : 134;

  return (
    <div className={styles.container}>
      <img height={imageHeight} className={styles.image} src={imageUrl}/>
    </div>
  )
}
