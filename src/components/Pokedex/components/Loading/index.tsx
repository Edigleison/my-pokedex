import {FunctionComponent} from "react";
import styles from "./style.module.css";
import {CircularProgress} from "@mui/material";

export const Loading: FunctionComponent = () => (
  <div className={styles.container}>
      <CircularProgress/>
    </div>
)
