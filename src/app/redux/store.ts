// 'use client'
// import {configureStore} from "@reduxjs/toolkit";
// import {LightSlice} from "@/app/redux/slices/LightSlice";
// import {DarkSlice} from "@/app/redux/slices/DarkSlice";
// import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
//
// export const store = configureStore({
//     reducer:{
//         Light: LightSlice.reducer,
//         Dark: DarkSlice.reducer
//     }
// })
// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
//
// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;