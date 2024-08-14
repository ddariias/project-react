import React from 'react';
import Link from "next/link";
import styles from './components.module.css'

const Header = () => {
    return (
        <div>
            <div><Link href={'/movie'}>Movies</Link></div>
        </div>
    );
};

export default Header;