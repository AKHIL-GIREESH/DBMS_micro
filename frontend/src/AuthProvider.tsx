// import { createContext, useEffect, useState } from "react";
// import {UserContextType} from "../Types/user"
// import { useQuery } from "react-query";

// const AuthContext = createContext<null | UserContextType>(null);

// export default function AuthProvider({ children }:React.PropsWithChildren){
//     const storedUser = localStorage.getItem('user')
//     if(storedUser){

//     }
//     return (
//     <AuthContext.Provider value={UserContext}>
//         {children}
//     </AuthContext.Provider>
//     );
// };