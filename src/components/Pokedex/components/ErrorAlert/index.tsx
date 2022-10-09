import {FunctionComponent} from "react";

import styles from "./style.module.css";
import {ErrorRounded} from "@mui/icons-material";

interface ErrorAlertProps {
  message: string;
}

export const ErrorAlert: FunctionComponent<ErrorAlertProps> = ({message}) => (
  <div className={styles.container}>
    <ErrorRounded sx={{color: "red"}}/>
    <span className={styles.text}>Error: {message}</span>
  </div>
)
