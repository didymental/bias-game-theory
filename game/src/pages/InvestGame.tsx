import { Button, Modal, ModalBody, ModalFooter, ModalContent, ModalHeader, ModalOverlay, Stack, useDisclosure } from "@chakra-ui/react"
import { useState } from "react"
import { Question } from "../components/Question"
import { InvestGameAnswerResponse, InvestGameContent } from "../content/InvestGameContent"
import { GenericQuestionLayout } from "../layouts/GenericQuestionLayout"
import { InvestOptions } from "../types/investOptions"

const useGameInvestOrNoInvest = () => {
  const [selection, setSelection] = useState<InvestOptions | null>(null)
  const [final, setFinal] = useState<InvestOptions | null>(null)
  const { onOpen: openModal, onClose: closeModal, isOpen: shouldShowModal } = useDisclosure()

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

  const confirmSelection = () => {
    if (!selection) return
    setFinal(selection)
    openModal()
  }

  return {
    selection,
    handleSelection,
    hasSelectedOption: selection != null,
    confirmSelection,
    shouldShowModal,
    closeModal,
    openModal,
    final,
  }
}

export const InvestGame = () => {
  const { selection,
    handleSelection,
    hasSelectedOption,
    confirmSelection,
    shouldShowModal,
    closeModal,
    final: finalOption
  } = useGameInvestOrNoInvest()


  return (
    <>
      <GenericQuestionLayout
        renderHeader={() => <Question question={InvestGameContent} />}
        renderOptions={() => (<Stack>
          <Button onClick={() => handleSelection(InvestOptions.INVEST)} background={hasSelectedOption && selection === InvestOptions.INVEST ? 'blue.100' : 'gray.100'}>Invest</Button>
          <Button onClick={() => handleSelection(InvestOptions.NO_INVEST)} background={hasSelectedOption && selection === InvestOptions.NO_INVEST ? 'blue.100' : 'gray.100'}>Don't Invest</Button>
          {hasSelectedOption ? <Button onClick={confirmSelection}>Confirm</Button> : null}
        </Stack>)

        }
        // TODO: add canvas animation here
        renderCanvas={() => null}
      />
      <Modal isOpen={shouldShowModal} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{finalOption ? InvestGameAnswerResponse[finalOption].header : null}</ModalHeader>
          {/* <ModalCloseButton /> */}

          <ModalBody>
            {finalOption ? InvestGameAnswerResponse[finalOption].body : null}
          </ModalBody>
          <ModalFooter>
            <Button onClick={closeModal}>Got it!</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}