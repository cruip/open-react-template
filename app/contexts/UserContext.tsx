'use client'

import React, { createContext, useState, useContext, ReactNode } from 'react';
interface User {
  name: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
console.log("hello")
  const context = useContext(UserContext);
  console.log(context)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
