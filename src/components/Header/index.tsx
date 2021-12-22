import React, { Component } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from "./style.module.scss";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { IconButton } from '@mui/material';

function Header(props:any) {
  const router = useRouter()

  return (
    <div className={styles.header}>
      {props.backButton ? (
        <IconButton onClick={() => router.push(props.backButton)}>
          <ArrowBackIosIcon className={styles.header_icon}></ArrowBackIosIcon>
        </IconButton>) : 
        (<IconButton>
          <PersonIcon className={styles.header_icon}></PersonIcon>
        </IconButton>)
      }
      <Link href="/">
        <img className={styles.header_logo} src="/logo.svg"></img>
      </Link>
      <Link href="/chat">
        <IconButton className={styles.header_logo}>
          <ForumIcon></ForumIcon>
        </IconButton>
      </Link>
    </div>
  )
}

export default Header
