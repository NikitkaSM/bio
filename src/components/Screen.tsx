import { Flex, FlexProps } from "@chakra-ui/react"

export function Screen({ children, ...restProps }: FlexProps) {
  return (
    <Flex
      direction="column"
      position="fixed"
      height="-webkit-fill-available"
      width="100vw"
      overflow="hidden"
      {...restProps}
    >
      {children}
    </Flex>
  )
}
