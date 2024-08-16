// 'use client'
// import React, {FC, useEffect, useState} from 'react';
// import { Rating, Star } from '@smastrom/react-rating'
// import '@smastrom/react-rating/style.css'
// import {IMovie} from "@/models/IMovie";
//
// type RatingProps ={
//     vote_average:number
// }
//
// const myStyles = {
//     itemShapes: Star,
//     activeFillColor: '#ffb700',
//     inactiveFillColor: '#fbf1a9'
// }
// const RatingComponent:FC<RatingProps> = ({vote_average}) => {
//     const [rating, setRating] = useState(0)
//
//     useEffect(() => {
//         setRating(vote_average/2)
//     }, [vote_average]);
//
//     return (
//         <div>
//             <Rating style={{ maxWidth: 150 }} value={rating} onChange={setRating} itemStyles={myStyles} />
//         </div>
//     );
// };
//
// export default RatingComponent;


import React from 'react';
import StarRating from "@ernane/svelte-star-rating";

const myStyles = {
    eadOnly: false,
    countStars: 10,
    range: {
        min: 0,
        max: 10,
        step: 0.001
    },
    score: 0.0,
    showScore: true,
    scoreFormat: function(){ return `(${this.score.toFixed(0)}/${this.countStars})` },
    name: "",
    starConfig: {
        size: 30,
        fillColor: '#F9ED4F',
        strokeColor: "#BB8511",
        unfilledColor: '#FFF',
        strokeUnfilledColor: '#000'
    }
}

const RatingComponent = () => {
    return (
        <div>
            <StarRating {myStyles}/>
        </div>
    );
};

export default RatingComponent;