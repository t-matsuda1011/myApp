"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import QuizIcon from '@mui/icons-material/Quiz';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { AppProvider, type Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import Link from 'next/link';


const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Menu',
  },
  {
    segment: 'Top',
    title: 'Top',
    icon: <DashboardIcon />,
  },
  {
    segment: 'Quiz',
    title: 'Quiz',
    icon: <QuizIcon />,
  },
  {
    segment: 'Wiki',
    title: 'Wiki',
    icon: <StickyNote2Icon />,
  },
];

const customTheme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: '#F9F9FE',
          paper: '#EEEEF9',
        },
      },
    },
    dark: {
      palette: {
        background: {
          default: '#2A4364',
          paper: '#112E4D',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});


export default function ( {children}: {children: React.ReactNode}) {

  const router = useDemoRouter('/quiz');

  return (
    <html>
      <body>
        <AppProvider
          navigation={NAVIGATION}
          router={router}
          theme={customTheme}
          branding={{
            logo: <SmartToyIcon/>,
            title: 'まつだ'
          }}
        >
          <DashboardLayout>
            <Box
              sx={{
                py: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              {children}
            </Box>
          </DashboardLayout>
        </AppProvider>
      </body>
    </html>
  );
}