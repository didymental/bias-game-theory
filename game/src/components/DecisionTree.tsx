import { chakra, Box, Center } from "@chakra-ui/react";
import { useLayoutEffect, useRef, useState } from "react";
import Tree from "react-d3-tree"

// @ts-ignore
const ChakraTree = chakra(Tree)

export const DecisionTree = ({ data }: { data: any }) => {
  const straightPathFunc = (linkDatum: { source: { y: number, x: number }, target: { y: number, x: number } }, orientation: string) => {
    const { source, target } = linkDatum;
    return orientation === 'horizontal'
      ? `M${source.y},${source.x}L${target.y},${target.x}`
      : `M${source.x},${source.y}L${target.x},${target.y}`;
  }

  const ref = useRef(null)
  const [, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useLayoutEffect(() => {
    const { current } = ref
    // @ts-ignore
    setWidth(current ? current.offsetWidth : 0)
    // @ts-ignore
    setHeight(current ? current.offsetHeight : 0)
  }, [ref])

  return (
    <Center>
      <Box w="100%" h="300px" ref={ref}>
        <ChakraTree
          data={data}
          zoomable={false}
          draggable={false}
          translate={{
            x: 20,
            y: 0.5 * height
          }}
          pathFunc={straightPathFunc}
          orientation="horizontal"
          w="100%"
          h="100%"

        />
      </Box>
    </Center>
  )
}