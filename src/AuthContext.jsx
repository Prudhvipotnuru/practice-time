import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({children}){
    const [token , setToken]= useState(()=>localStorage.getItem("token"));
    const [user, setUser]= useState(()=>localStorage.getItem("user"));
    function login(newToken,username){
        localStorage.setItem("token",newToken);
        localStorage.setItem('user',username);
        setToken(newToken);
        setUser(username);
    }
    function logout(){
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setToken(null);
        setUser(null);
    }
    return (
        <AuthContext.Provider value={{ token, user, isLoggedIn: !!token, login, logout }}>
        {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
  return useContext(AuthContext);
}