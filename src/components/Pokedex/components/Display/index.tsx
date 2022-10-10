import {FunctionComponent, ReactNode} from "react";
import styles from "./style.module.css";

interface DisplayProps {
  children: ReactNode;
}

export const Display: FunctionComponent<DisplayProps> = ({
  children
}) => {

  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
