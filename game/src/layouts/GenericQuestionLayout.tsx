import { Center, Box } from "@chakra-ui/react"
import { ReactNode, useEffect, useRef } from "react"

interface GenericQuestionLayoutProps {
  renderHeader: () => ReactNode;
  renderCanvas: () => ReactNode;
  renderResponse: () => ReactNode;
  renderOptions: () => ReactNode;
}

export const GenericQuestionLayout = ({
  renderHeader,
  renderCanvas,
  renderResponse,
  renderOptions,
}: GenericQuestionLayoutProps) => {
  const headerRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // set height so that button is always at the bottom
  }, [headerRef, canvasRef])

  return (
    <Box py={{ base: 4, md: 10 }} minH="100%">
      <Box ref={headerRef} >
        <Center>
          {renderHeader()}
        </Center>
      </Box>
      {/* todo: update css for canvas to break flex, position: absolute, zIndex, etc */}
      {/* consider using react-three/fiber for background animations on the game. */}
      <Box ref={canvasRef} h="40vh">
        <Center>
          {renderCanvas()}
        </Center>
      </Box>
      <Box >
        <Center>
          {renderResponse()}
        </Center>
      </Box>
      <Box >
        <Center>
          {renderOptions()}
        </Center>
      </Box>

    </Box >
  )
}