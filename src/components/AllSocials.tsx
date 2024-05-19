import { Stack } from "@chakra-ui/react"
import { Social as SocialType } from "../social.interface"
import { Social } from "./Social"

interface Props {
  socials: SocialType[]
}

export const AllSocials = ({ socials }: Props) => {
  return (
    <Stack direction={"row"} spacing={8}>
      {socials.map((social) => (
        <Social social={social} />
      ))}
    </Stack>
  )
}
