import styles from "./style.module.css";
import {ErrorRounded} from "@mui/icons-material";

export const Error = ({message}) => (
  <div className={styles.container}>
    <ErrorRounded sx={{color: "red"}}/>
    <span className={styles.text}>Error: {message}</span>
  </div>
)
