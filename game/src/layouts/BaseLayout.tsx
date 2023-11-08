import {
  Box,
  Flex,
  Link,
  Container,
  Stack,
  Text,
} from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import Logo from '../../public/logo.svg';

// TODO: update logo
const NavBar = () => (
  <Box>
    <Flex
      bg={'white'}
      color={'gray.600'}
      h={'5vh'}
      py={{ base: 2 }}
      px={{ base: 4 }}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={'gray.200'}
      align={'center'}>
      <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} align="center">
        <Link href="/">
          <img  src={Logo} style={{height: "30px"}} alt="logo"/>
        </Link>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Text marginLeft="5" fontWeight="bold">Dollar Dilemma</Text>
        </Link>
      </Flex>
    </Flex>
  </Box>
)

export const BaseLayout = ({ children }: PropsWithChildren) => (
  <Box background="gray.50" h="100vh" w="100vw" overflow="auto">
    <Stack>
      <NavBar />
      <Container maxW="8xl">
        {children}
      </Container>
    </Stack>
  </Box >
)
