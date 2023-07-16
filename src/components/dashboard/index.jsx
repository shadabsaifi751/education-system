import React from 'react'
import Header from '../Header/Header'
import Layout from '../Layout'
import { Outlet } from 'react-router-dom'
import styles from "./dashboard.module.scss"
import Main from './Main/Main'

const Dashboard = () => {
    return (
        <main className={styles.dashboard_wrapper}>
            <Header />
            <Main/>
        </main>
    )
}

export default Dashboard