import {
  Box,
  Flex,
  Link,
  Text,
  Container,
  Stack,
} from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

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
      <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
        <Link href="/">
          <Text
            textAlign={'left'}
            fontFamily={'heading'}
            color={'gray.800'}>
            Logo
        </Text>
        </Link>
      </Flex>
    </Flex>
  </Box>
)

export const BaseLayout = ({ children }: PropsWithChildren) => (
  <Box background="gray.50" h="100vh" w="100vw" >
    <Stack>
      <NavBar />
      <Container maxW="8xl">
        {children}
      </Container>
    </Stack>
  </Box >
)
