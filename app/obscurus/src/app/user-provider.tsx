"use client"
import { Users } from '@obscurus/database/src/sql.generated';
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useUser } from './hooks/use-user';

const UserContext = createContext<Users | null>(null);

export const UserProvider = ({ children, userData }: {children: ReactNode | ReactNode[], userData: Users}) => {
  const [user, setUser] = useState<Users | null>(null);

    useEffect(() => {
      if (userData) {
        console.log("User data in user provider", userData);
        setUser(userData);
      }
    }, [userData, setUser]);

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserData = () => {
  return useContext(UserContext);
};
