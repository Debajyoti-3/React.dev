import {useContext, createContext} from "react";

// here we pass initial values through createContext(), but in previous case we did not do that much
export const themeContext = createContext({
    themeMode: "light",
    lightTheme: ()=>{},
    darkTheme: ()=>{}
})

export const themeProvider = themeContext.Provider;

export default function useTheme(){
    return useContext(themeContext);
}

// This is better approach for writing Context than previous one