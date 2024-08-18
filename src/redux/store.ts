// 'use client'
// import {configureStore} from "@reduxjs/toolkit";
// import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
// import {LightSlice} from "@/redux/slices/LightSlice";
// import {DarkSlice} from "@/redux/slices/DarkSlice";
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