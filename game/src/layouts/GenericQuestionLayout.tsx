import { Center, Box } from "@chakra-ui/react"
import { MutableRefObject, ReactNode, useEffect, useRef } from "react"

export const GenericQuestionLayout = ({
  renderHeader,
  renderCanvas,
  renderOptions,
}: {
  renderHeader: () => ReactNode,
  renderCanvas: () => ReactNode,
  renderOptions: () => ReactNode
}) => {
  const headerRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // set height so that button is always at the bottom
  }, [headerRef, canvasRef])

  return (
    <Box py={{ base: 4, md: 10 }} h="100vh">
      <Box ref={headerRef} h="20vh">
        <Center>
          {renderHeader()}
        </Center>
      </Box>
      {/* todo: update css for canvas to break flex, position: absolute, zIndex, etc */}
      {/* consider using react-three/fiber for background animations on the game. */}
      <Box ref={canvasRef} h="60vh">
        {renderCanvas()}
      </Box>
      <Box >
        <Center>
          {renderOptions()}
        </Center>
      </Box>

    </Box>
  )
}