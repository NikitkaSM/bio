import { Box } from "@chakra-ui/react"
import { Link } from "react-router-dom"

import { Social as SocialType } from "../social.interface"

interface Props {
  social: SocialType
}

export const Social = ({ social }: Props) => {
  const { icon, link } = social

  return (
    <Link to={link}>
      <Box w="40px">{icon}</Box>
    </Link>
  )
}
