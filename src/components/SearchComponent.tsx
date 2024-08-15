import React from 'react';
import styles from './Components.module.css'

const SearchComponent = () => {
    return (
        <form>
            <input type="text"/>
            <button className={styles.button}>submit</button>
        </form>
    );
};

export default SearchComponent;