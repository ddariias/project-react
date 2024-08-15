'use client'
import React, {FC} from 'react';
import {IMovies} from "@/models/IMovies";

const PaginationComponent:FC<IMovies> = ({page}) => {


    return (
        <div>
            <button>prev page</button>
            <button>next page</button>
        </div>
    );
};

export default PaginationComponent;