import classnames from 'classnames'
import CloseIcon from '@mui/icons-material/Close';
import Replay from '@mui/icons-material/Replay';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';
import React from 'react'
import styles from "./style.module.scss";

function SwipeButtons() {
  const repeat = classnames({
    [styles.repeat]: true,
    [styles.button]: true
  })
  const left = classnames({
    [styles.left]: true,
    [styles.button]: true
  })
  const star = classnames({
    [styles.star]: true,
    [styles.button]: true
  })
  const right = classnames({
    [styles.right]: true,
    [styles.button]: true
  })
  const lightning = classnames({
    [styles.lightning]: true,
    [styles.button]: true
  })
  return (
    <div className={styles.swipeButtons}>
      <IconButton className={repeat}>
        <Replay font-size="large"></Replay>
      </IconButton>
      <IconButton className={left}>
        <CloseIcon font-size="large"></CloseIcon>
      </IconButton>
      <IconButton className={star}>
        <StarIcon font-size="large"></StarIcon>
      </IconButton>
      <IconButton className={right}>
        <FavoriteIcon font-size="large"></FavoriteIcon>
      </IconButton>
      <IconButton className={lightning}>
        <FlashOnIcon font-size="large"></FlashOnIcon>
      </IconButton>
    </div>
  )
}

export default SwipeButtons
