import { Button, Stack } from "@chakra-ui/react"
import { useState } from "react"
import { Question } from "../components/Question"
import { GenericQuestionLayout } from "../layouts/GenericQuestionLayout"
import { InvestOptions } from "../types/investOptions"

const useGameInvestOrNoInvest = () => {
  const [selection, setSelection] = useState<InvestOptions | null>(null)

  const handleSelection = (selection: InvestOptions) => {
    switch (selection) {
      case InvestOptions.INVEST:
      case InvestOptions.NO_INVEST:
        setSelection(selection)
        break

      default:
        // if selection is neither available options, do nothing
        break
    }
  }

  return {
    selection,
    handleSelection,
    hasSelectedOption: selection != null,
  }
}

export const InvestGame = () => {
  const { selection, handleSelection, hasSelectedOption } = useGameInvestOrNoInvest()


  return (
    <GenericQuestionLayout
      renderHeader={() => <Question question={{
        title: 'Test',
        description: 'Description'
      }} />}
      renderOptions={() => (<Stack>
        <Button onClick={() => handleSelection(InvestOptions.INVEST)} background={hasSelectedOption && selection === InvestOptions.INVEST ? 'blue.100' : 'gray.100'}>Invest</Button>
        <Button onClick={() => handleSelection(InvestOptions.NO_INVEST)} background={hasSelectedOption && selection === InvestOptions.NO_INVEST ? 'blue.100' : 'gray.100'}>Don't Invest</Button>
        {hasSelectedOption ? <Button>Confirm</Button> : null}
      </Stack>)

      }
      renderCanvas={() => null}
    />
  )
}