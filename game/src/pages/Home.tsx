import { Box, Button, Center, Link } from '@chakra-ui/react'
// import { Canvas } from '@react-three/fiber'
import Logo from '../../public/logo.png';

export const Home = () => {
  return (<Box py={{ base: 4, md: 10 }}>
    {/* consider using react three for background animations on the game. */}
    {/* <Box>
      <Center>
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <mesh>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
        </Canvas>
      </Center>
    </Box> */}
    <Center>
      <img  src={Logo} style={{height: "40vh", margin: "2vh"}} alt="logo"/>
    </Center>
    <Center>
      <Link href="/invest-game">
        <Button size="lg">Start Game</Button>
      </Link>
    </Center>
  </Box>)
}