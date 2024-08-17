'use client'
import React, {FC, useEffect, useState} from 'react';
import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import {IMovie} from "@/models/IMovie";

type RatingProps ={
    vote_average:number
}

const myStyles = {
    itemShapes: Star,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
}
const RatingComponent:FC<RatingProps> = ({vote_average}) => {
    const [rating, setRating] = useState(0)

    useEffect(() => {
        setRating(vote_average/2)
    }, [vote_average]);

    return (
        <div>
            <Rating style={{ maxWidth: 150 }} value={rating}  itemStyles={myStyles} readOnly/>
        </div>
    );
};

export default RatingComponent;
