import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  fonts: {
    heading: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `Inter, sans-serif`,
  },
  styles: {
    global: () => ({
      html: {
        fontSize: 16,
      },
      body: {
        color: "gray.400",
        backgroundColor: "gray.800",
      },
      //  disable zoom on ios for fields
      // input: { fontSize: '16px' },
      // select: { fontSize: '16px' },
    }),
  },
})
