import { createTheme } from '@mui/material/styles';
import { red, amber} from '@mui/material/colors';


export const theme = createTheme({

    palette: {
        primary: red,
        secondary: amber,
      },    
    typography:{
        h1:{
            fontSize: 32,
            '@media (min-width:600px)': {
                fontSize: 50,
              },
            
        },
        h2:{
            fontSize: 22,
            '@media (min-width:600px)': {
                fontSize: 40,
              },
        },
        h3:{
            fontSize: 30,
            '@media (min-width:600px)': {
                fontSize: 36,
              },
        }
    }
})

export const darkTheme = createTheme({
    palette:{
        mode: "dark"
    },
    typography:{
        h1:{
            fontSize: 32,
            '@media (min-width:600px)': {
                fontSize: 50,
              },
            
        },
        h2:{
            fontSize: 22,
            '@media (min-width:600px)': {
                fontSize: 40,
              },
        },
        h3:{
            fontSize: 30,
            '@media (min-width:600px)': {
                fontSize: 36,
              },
        }
    }
})



