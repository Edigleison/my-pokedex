import styles from "./style.module.css";
import CachedIcon from '@mui/icons-material/Cached';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Button, IconButton} from "@mui/material";

export const Controls = ({
  onRandom,
  onPreview,
  onNext
}) => {

  return (
    <div className={styles.container}>
      <div className={[styles.roundButton, styles.random].join(' ')}>
        <IconButton onClick={onRandom} color="secondary" title="Random" component="label">
          <CachedIcon fontSize="large" sx={{ color: "#fff" }}/>
        </IconButton>
      </div>

      <Button onClick={onPreview} variant="contained" startIcon={<ArrowBackIcon />}>
        Preview
      </Button>

      <Button onClick={onNext} variant="contained" endIcon={<ArrowForwardIcon />}>
        Next
      </Button>
    </div>
  )
}
