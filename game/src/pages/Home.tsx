import { Box, Button, Center, Link } from '@chakra-ui/react'
import { Canvas } from '@react-three/fiber'

export const Home = () => {
  return (<Box py={{ base: 4, md: 10 }}>
    {/* consider using react three for background animations on the game. */}
    <Box>
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
    </Box>
    <Center>
      <Link href="/invest-game">
        <Button>Start Game</Button>
      </Link>
    </Center>
  </Box>)
}