import {FunctionComponent} from "react";
import styles from "./style.module.css";

interface PhotoProps {
  imageUrl: string;
}

export const Photo: FunctionComponent<PhotoProps>= ({
  imageUrl
}) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={imageUrl}/>
    </div>
  )
}
