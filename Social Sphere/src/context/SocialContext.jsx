import React, { createContext, useContext, useState, useEffect } from 'react';

const SocialContext = createContext();

export const SocialProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Minimalist User State
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('social_user');
    return saved ? JSON.parse(saved) : { id: "", username: "Guest User" };
  });

  // Track registered users in a "Database" (LocalStorage array)
  const [registeredUsers, setRegisteredUsers] = useState(() => {
    const saved = localStorage.getItem('all_users');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('social_user', JSON.stringify(user));
    localStorage.setItem('all_users', JSON.stringify(registeredUsers));
  }, [user, registeredUsers]);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <SocialContext.Provider value={{ isAuthenticated, user, setUser, registeredUsers, setRegisteredUsers, login, logout }}>
      {children}
    </SocialContext.Provider>
  );
};

export const useSocial = () => useContext(SocialContext);