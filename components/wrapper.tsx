// components/Wrapper.tsx
'use client';

import { useDarkMode } from '@/hook';
import React, { useEffect, ReactNode, useState } from 'react';

interface WrapperProps {
  children: ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div id='background-sh' className={`flex flex-col min-h-screen overflow-hidden`}>
      {children}
    </div>
  );
};
