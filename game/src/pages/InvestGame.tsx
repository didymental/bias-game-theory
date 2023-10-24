import { Box, Button, HStack, Heading, Link, Stack, Text, useBoolean, Flex } from "@chakra-ui/react";
import { GenericQuestionLayout } from "../layouts/GenericQuestionLayout"
import { ReactNode, useState } from "react";
import { AnswerOption, InvestGameQuestions } from "../content/InvestGameContent";

export const InvestGame = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [prevAnswerIndex, setPrevAnswerIndex] = useState<number | null>(null);
  const [answerIndex, setAnswerIndex] = useState<number | null>(null);
  const [isAnswerConfirmed, setAnswerConfirmed] = useBoolean(false);
  const currentQuestion = InvestGameQuestions[questionIndex];
  const currentOptions = currentQuestion.options(prevAnswerIndex);

  return (
    <>
      <GenericQuestionLayout
        renderHeader={() => <Question title={currentQuestion.title} description={currentQuestion.description} />}
        renderOptions={() =>
        (!isAnswerConfirmed ?
          <Stack>
            <AnswerButtons options={currentOptions} selection={answerIndex} handleSelection={setAnswerIndex} />
            {answerIndex != null ? <Button onClick={setAnswerConfirmed.on}>Confirm</Button> : null}
          </Stack> :
          questionIndex == InvestGameQuestions.length - 1 ?
            <Link href="/">
              <Button>
                Done
            </Button>
            </Link> :
            <Button onClick={() => {
              setQuestionIndex((i) => i + 1);
              setPrevAnswerIndex(() => {
                const currAns = answerIndex;
                setAnswerIndex(null);
                return currAns;
              })
              setAnswerConfirmed.off();
            }}>
              Next
          </Button>
        )
        }
        renderResponse={() => (isAnswerConfirmed && answerIndex != null
          ? currentOptions[answerIndex].feedbackBody
          : null)
        }
        // TODO: add canvas animation here, use feedbackHeader here
        renderCanvas={() => null}
      />
    </>
  )
}

const Question = ({ title, description }: { title: string; description: string | ReactNode }) => {
  return (
    <Box p={4} background="white" w="80%" borderRadius={10}>
      <Stack>
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
      </Stack>
    </Box>)
}

interface AnswerButtonsProps {
  options: AnswerOption[];
  selection: number | null;
  handleSelection: (index: number) => void
}

const AnswerButtons = ({ options, selection, handleSelection }: AnswerButtonsProps) => {
  return (
    <HStack>
      {options.map((option, index) =>
        <Button
          onClick={() => handleSelection(index)}
          background={selection === index ? 'blue.100' : 'gray.100'}
        >
          {option.label}
        </Button>)}
    </HStack>)
}