import { Box, Button, ChakraProvider, Divider, Stack, HStack, Center, Card, CardHeader, Text, Heading } from '@chakra-ui/react'
import { QuestionType } from '../types/question'

export const Question = ({ question }: { question: QuestionType }) => {
  return (
    <Box p={4} background="white" w="80%" borderRadius={10}>
      <Stack>
        <Heading size="md">{question.title}</Heading>
        <Text>{question.description}</Text>
      </Stack>
    </Box>)
}