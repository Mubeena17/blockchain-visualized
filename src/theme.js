import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        crypto: {
            100: "#9b99f5",
            200: "#8380f3",
            300: "#5350ef",
            400: "#5350ef",
            500: "#5350ef",
            600: "#5350ef",
            700: "#5350ef",
            900: "#292956",
        },
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: "bold",
            },
        },
    },
});

export default theme;
