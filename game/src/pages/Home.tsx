import { Box, Button, Center } from '@chakra-ui/react'
import { Canvas } from '@react-three/fiber'

export const Home = () => {
  const handleStartGame = () => {
    // todo: redirect to first scenario game
  }

  return (<Box w='100vw' h="100vh" py={{ base: 4, md: 10 }}>
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
      <Button onClick={handleStartGame}>Start Game</Button>
    </Center>
  </Box>)
}