// 'use client'
// import React from 'react';
// import {useAppDispatch, useAppSelector} from "@/app/redux/store";
// import {deleteLightState, lightChange} from "@/app/redux/slices/LightSlice";
// import {darkChange, deleteDarkState} from "@/app/redux/slices/DarkSlice";
//
//
// const LightOrDarkComponent = () => {
//     const dispatch = useAppDispatch()
//    const light = useAppSelector((state) => state.LightSlice.lightState)
//    const dark = useAppSelector((state) => state.DarkSlice.darkState)
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
//                 {dark ? "Переключити на світлу тему" : "Переключити на темну тему"}
//             </button>
//         </div>
//     );
// };
//
// export default LightOrDarkComponent;