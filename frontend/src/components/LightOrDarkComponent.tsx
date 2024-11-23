// 'use client'
// import React from 'react';
// import {useAppDispatch, useAppSelector} from "@/redux/store";
// import {deleteLightState, lightChange} from "@/redux/slices/LightSlice";
// import {darkChange, deleteDarkState} from "@/redux/slices/DarkSlice";
//
//
// const LightOrDarkComponent = () => {
//     const dispatch = useAppDispatch()
//    const light = useAppSelector((state:any) => state.LightSlice.lightState)
//    const dark = useAppSelector((state:any) => state.DarkSlice.darkState)
//
//     const changeState = () => {
//         if (!light){
//             dispatch(lightChange());
//             dispatch(deleteDarkState())
//         }else {
//             dispatch(darkChange());
//             dispatch(deleteLightState())
//         }
//     }
//
//     return (
//         <div>
//             <button onClick={changeState}>
//                 click
//             </button>
//         </div>
//     );
// };
//
// export default LightOrDarkComponent;