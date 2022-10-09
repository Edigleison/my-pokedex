import styles from "./style.module.css";
import {CircularProgress} from "@mui/material";

export const Loading = () => (
  <div className={styles.container}>
      <CircularProgress></CircularProgress>
    </div>
)
