// 'use client'
//
//
// import {useAppSelector} from "@/redux/store";
// import LightOrDarkComponent from "@/components/LightOrDarkComponent";
//
// export default function StatePage() {
//
//     const light = useAppSelector((state:any) => state.LightSlice.lightState)
//     const dark = useAppSelector((state:any) => state.DarkSlice.darkState)
//
//     return (
//         <main>
//             <div style={{backgroundColor: dark ? "#333" : light ? "#FFF" : "#FFF", color: dark ? "#FFF" : "#000"}}>
//                 <LightOrDarkComponent/>
//             </div>
//         </main>
//     );
// }
