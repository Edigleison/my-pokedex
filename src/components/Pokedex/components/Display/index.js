import styles from "./style.module.css";

export const Display = ({
  children
}) => {

  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
