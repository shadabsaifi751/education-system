import React from 'react'
import { Outlet } from 'react-router-dom';
import styles from "./main.module.scss"

const Main = () => {
  return (
    <section className={styles.main_body}>
        <Outlet/>
    </section>
  )
}

export default Main