'use client'
import React, {FC} from 'react';
import {IMovies} from "@/models/IMovies";
import {useSearchParams} from "next/navigation";

type Props ={
    page: string | null
}

const PaginationComponent:FC<Props> = ({page}) => {

    const searchParams=useSearchParams()




    return (
        <div>
            <button>prev page</button>
            <button>next page</button>
        </div>
    );
};

export default PaginationComponent;