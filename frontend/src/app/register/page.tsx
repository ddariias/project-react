"use client";

import React, { useState } from 'react';
import AddMovieContainer from "@/containers/AddMovieContainer";
import styles from './register.module.css'

const RegisterPage = () => {
    return (
        <div style={{ padding: "20px" }}>
            <h2 className={styles.h2}>Register Movie</h2>
            <AddMovieContainer />
        </div>
    );
};

export default RegisterPage;
