import classnames from 'classnames'
import CloseIcon from '@mui/icons-material/Close';
import Replay from '@mui/icons-material/Replay';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';
import React from 'react'
import styles from "./style.module.scss";

interface propsButton {
  clickRight: any,
  clickLeft: any
}

function SwipeButtons({clickRight, clickLeft}:propsButton) {
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
        <Replay fontSize="large"></Replay>
      </IconButton>
      <IconButton className={left} onClick={clickLeft}>
        <CloseIcon fontSize="large"></CloseIcon>
      </IconButton>
      <IconButton className={star}>
        <StarIcon fontSize="large"></StarIcon>
      </IconButton>
      <IconButton className={right} onClick={clickRight}>
        <FavoriteIcon fontSize="large"></FavoriteIcon>
      </IconButton>
      <IconButton className={lightning}>
        <FlashOnIcon fontSize="large"></FlashOnIcon>
      </IconButton>
    </div>
  )
}

export default SwipeButtons
