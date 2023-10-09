import { Box, Button, ChakraProvider, Divider, Stack, HStack, Center, Card, CardHeader, Text, Heading } from '@chakra-ui/react'
import { QuestionType } from '../types/question'

export const Question = ({ question }: { question: QuestionType }) => {
  return (<Box p={4} borderWidth={1} borderColor="black" >
    <HStack>
      <Heading>{question.title}</Heading>
      <Center h="50px">
        <Divider orientation="vertical" />
      </Center>
      <Text>{question.description}</Text>
    </HStack>
  </Box>)
}