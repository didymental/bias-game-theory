import { Text } from "@chakra-ui/react";
import { InvestOptions } from "../types/investOptions";
import { QuestionType } from "../types/question";

export const InvestGameContent: QuestionType = {
  title: `Help Alex make a decision: Invest or Don't Invest?`,
  description: `You have travelled back in time to the past, to 3 Jan 2020. Alex is wondering if it is wise to purchase the following asset as an investment. The price of the asset is USD 208.67, and we know that in a year's time, the price will rise to USD 273.16. If Alex chooses not to invest, Alex will place his money into Alex's bank, which will only earn a 0.5% interest rate. Effectively, Alex will lose 1% since inflation is at 1.5% annually.`
}

const CORRECT_OPTION: InvestOptions = InvestOptions.INVEST
const INCORRECT_OPTION: InvestOptions = InvestOptions.NO_INVEST

export const InvestGameAnswerResponse = {
  [CORRECT_OPTION]: {
    header: `Great answer!`,
    body: (
      <>
        <Text>Let's examine this from a strategic perspective.</Text>
        <br />
        <Text>
          Alex's payoff from investing is +30.91%. Alex's payoff from not investing is -1%.
        </Text>
        <br />
        <Text>
          Alex thus has a dominant strategy: Invest. Inflation induces the dominant strategy for Alex to be invest.
        </Text>
      </>)
  },
  [INCORRECT_OPTION]: {
    header: `Good attempt - unfortunately, that's not right!`,
    body: (
      <>
        <Text>Let's examine this from a strategic perspective.</Text>
        <br />
        <Text>
          Alex's payoff from investing is +30.91%. Alex's payoff from not investing is -1%.
        </Text>
        <br />
        <Text>
          Alex thus has a dominant strategy: Invest. Inflation induces the dominant strategy for Alex to be invest.
        </Text>
      </>)
  }
}