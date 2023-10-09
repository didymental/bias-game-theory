import { Button, Stack } from "@chakra-ui/react"
import { Question } from "../components/Question"
import { GenericQuestionLayout } from "../layouts/GenericQuestionLayout"
import { InvestOptions } from "../types/investOptions"

export const InvestGame = () => {
  const handleSelection = (selection: InvestOptions) => {
    // todo: redirect according to invest option
    switch (selection) {
      case InvestOptions.INVEST:
      // redirect to invest
      case InvestOptions.NO_INVEST:
      // redirect
    }
  }


  return (
    <GenericQuestionLayout
      renderHeader={() => <Question question={{
        title: 'Test',
        description: 'Description'
      }} />}
      renderOptions={() => (<Stack>
        <Button onClick={() => handleSelection(InvestOptions.INVEST)}>Invest</Button>
        <Button onClick={() => handleSelection(InvestOptions.NO_INVEST)}>Don't Invest</Button>
      </Stack>)

      }
      renderCanvas={() => null}
    />
  )
}