import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'

export const Link = ({ href, children }: LinkProps) => {
  return <ChakraLink as={ReactRouterLink} to={href}>{children}</ChakraLink>
}