import React from 'react';
import Link from "next/link";
import styles from './Components.module.css'
import SearchPage from "@/app/search/page";

const Header = () => {
    return (
        <div className={styles.header}>
            <h1 className={styles.text}><Link href={'/'}>Movies App</Link></h1>
            <div><Link href={'/movie'}>Movies</Link></div>
            <div><Link href={'/genre'}>Genre</Link></div>
            <div><SearchPage/></div>

        </div>
    );
};

export default Header;