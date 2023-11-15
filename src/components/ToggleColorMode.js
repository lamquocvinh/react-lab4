// import React from 'react';
// import IconButton from '@mui/material/IconButton';
// import Box from '@mui/material/Box';
// import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';


// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

// function MyApp({ toggleColorMode }) {
//   const theme = useTheme();
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         width: '100%',
//         alignItems: 'center',
//         justifyContent: 'center',
//         bgcolor: 'background.default',
//         color: 'text.primary',
//         borderRadius: 1,
//         p: 3,
//         height:'5px',
//         width:'150',
//       }}
//     >
//       {theme.palette.mode} mode
//       <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
//         {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
//       </IconButton>
//     </Box>
//   );
// }

// export default function ToggleColorMode() {
//   const [mode, setMode] = React.useState('light');
//   const toggleColorMode = React.useCallback(() => {
//     setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
//   }, []);

//   const theme = React.useMemo(
//     () =>
//       createTheme({
//         palette: {
//           mode,
//         },
//       }),
//     [mode],
//   );

//   return (
//     <ColorModeContext.Provider value={{ toggleColorMode }}>
//       <ThemeProvider theme={theme}>
//         <MyApp  toggleColorMode={toggleColorMode}/>
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }

import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
function ThemeToggle() {
  const { dark, toggle } = useContext(ThemeContext);
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    
    // <button onClick={toggle}>
    //   {dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    // </button>
    <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
  );
}

export default ThemeToggle;