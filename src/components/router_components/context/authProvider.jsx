import React, { createContext, useContext, useState }  from "react";

const AuthContext = createContext(null);

export const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => localStorage.getItem('user') || null);
    const signin = (newUser, callback) => {
        setUser(newUser);
        localStorage.setItem('user', newUser)
        callback();
    }

    const signout = (callback) => {
      setUser(null);
      localStorage.removeItem('user');
      callback();
  }

    const value = {
        user,
        signin,
        signout
    } 

    return (
        <AuthContext.Provider value={ value }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
