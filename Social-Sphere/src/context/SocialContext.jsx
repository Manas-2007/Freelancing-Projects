import React, { createContext, useContext, useState, useEffect } from 'react';

const SocialContext = createContext();

export const SocialProvider = ({ children }) => {
  // 1. AUTH STATE
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('social_user') ? true : false;
  });
  
  // 2. USER STATE
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('social_user');
    return saved ? JSON.parse(saved) : { id: "", username: "Guest User" };
  });

  // 3. REGISTERED USERS (YE MISSING THA!)
  const [registeredUsers, setRegisteredUsers] = useState(() => {
    const saved = localStorage.getItem('all_users');
    return saved ? JSON.parse(saved) : [];
  });

  // 4. POSTS STATE
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem('social_posts');
    const parsed = saved ? JSON.parse(saved) : [];
    return parsed.filter(post => post.title !== "The Gwalior Heritage");
  });

  // 5. THEME STATE
const [darkMode, setDarkMode] = useState(() => {
  return localStorage.getItem('theme') === 'dark';
});

// Theme side-effect
useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}, [darkMode]);

  // FUNCTIONS
  const login = () => setIsAuthenticated(true);
  
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('social_user'); 
    setUser({ id: "", username: "Guest User" });
  };

  const addPost = (newPost) => setPosts([newPost, ...posts]);
  const deletePost = (postId) => setPosts(posts.filter(p => p.id !== postId));

  // SAVE TO LOCAL STORAGE
  useEffect(() => {
    if (user.id) localStorage.setItem('social_user', JSON.stringify(user));
    localStorage.setItem('all_users', JSON.stringify(registeredUsers)); // Important!
    localStorage.setItem('social_posts', JSON.stringify(posts));
  }, [user, registeredUsers, posts]);

  return (
    <SocialContext.Provider value={{ 
      isAuthenticated, 
      user, 
      setUser, 
      registeredUsers, // Provider mein export karo
      setRegisteredUsers, 
      posts, 
      addPost, 
      deletePost, 
      login, 
      logout,
      darkMode,
      setDarkMode 
    }}>
      {children}
    </SocialContext.Provider>
  );
};

export const useSocial = () => useContext(SocialContext);