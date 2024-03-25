import { createTheme } from "@mui/material";
import { green, purple } from "@mui/material/colors";

export const myTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: purple["400"]
        },
        secondary: {
            main: green["300"]
        }
    },
    typography: {
        allVariants: {
            fontSize: 20,
            textTransform: "none"
        }
    }
});
