import { createTheme } from '@mui/material/styles';
import { red, amber} from '@mui/material/colors';


export const theme = createTheme({

    palette: {
        primary: red,
        secondary: amber,
      },    
})

export const darkTheme = createTheme({
    palette:{
        mode: "dark"
    }
})



