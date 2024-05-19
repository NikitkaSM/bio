import { Avatar, Heading, Stack } from "@chakra-ui/react"
import { Screen } from "../Screen"

export const RootPage = () => {
  return (
    <Screen>
      <Stack
        margin="0 auto"
        width="100%"
        maxWidth="400px"
        padding="70px 20px 35px"
        height="100%"
        maxHeight="1000px"
        alignItems="center"
        spacing={4}
      >
        <Avatar
          src="https://yt3.googleusercontent.com/ytc/AIdro_lPb8VQFLmYGB5XI6wjkBnksNA03EArYZ7a0bv8786gp_0=s900-c-k-c0x00ffffff-no-rj"
          size="2xl"
        />
        <Heading size="lg">Nikita Smolin</Heading>
        <Stack direction="row">{}</Stack>
      </Stack>
    </Screen>
  )
}
