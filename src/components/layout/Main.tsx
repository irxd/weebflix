import React from 'react';
import Header from './Header';
import { Box } from '@mui/material';

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="main">
      <Header />
      <Box marginTop={16}>
        {children}
      </Box>
    </main>
  );
}