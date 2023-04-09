import React from "react";
import { useAuth } from "./context/authProvider";
import { useNavigate } from "react-router-dom";

export const AuthStatus = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const handleSignout = () => {
      auth.signout(() => navigate('/'));
  }
  if (auth.user === null) return "Вы не вошли";
  return (
      <div>
          Пользователь: {auth.user}
          <button style={{'margin': '0 0 0 5px'}} onClick={handleSignout}>Выйти</button>    
      </div>);
}
