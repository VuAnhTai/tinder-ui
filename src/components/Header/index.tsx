import React, { Component } from 'react';
import styles from "./style.module.scss";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';
export class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <IconButton>
          <PersonIcon className={styles.header_icon}></PersonIcon>
        </IconButton>
        <IconButton>
          <img className={styles.header_logo} src="/logo.svg"></img>
        </IconButton>
        <IconButton className={styles.header_logo}>
          <ForumIcon></ForumIcon>
        </IconButton>
      </div>
    )
  }
}

export default Header
