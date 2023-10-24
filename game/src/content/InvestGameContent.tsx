import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface AnswerOption {
  label: string;
  feedbackHeader: string;
  feedbackBody: ReactNode;
}

interface Question {
  title: string;
  description: string;
  options: (prevAnswer: number | null) => AnswerOption[];
}

const QuestionOne: Question = {
    title:  `Help Alex make a decision: Invest or Don't Invest?`,
    description: `You have travelled back in time to the past, to 3 Jan 2020. 
    Alex is wondering if it is wise to purchase the following asset as an investment. 
    The price of the asset is USD 208.67, and we know that in a year's time, the price will rise to USD 273.16. 
    If Alex chooses not to invest, Alex will place his money into Alex's bank, which will only earn a 0.5% interest rate. 
    Effectively, Alex will lose 1% since inflation is at 1.5% annually.`,
    options: () => [
      {
        label: "Invest",
        feedbackHeader: `Great answer!`,
        feedbackBody: (
          <Text>
            Let's examine this from a strategic perspective.<br />
            Alex's payoff from investing is +30.91%. Alex's payoff from not investing is -1%.<br />
            Alex thus has a dominant strategy: Invest. Inflation induces the dominant strategy for Alex to invest.
          </Text>
        )
      },
      {
        label: "Don't invest",
        feedbackHeader: `Good attempt - unfortunately, that's not right!`,
        feedbackBody: (
          <Text>
            Let's examine this from a strategic perspective.<br />
            Alex's payoff from investing is +30.91%. Alex's payoff from not investing is -1%.<br />
            Alex thus has a dominant strategy: Invest. Inflation induces the dominant strategy for Alex to invest.
          </Text>
        )
      }
    ]
  }

const BuyOrHoldOptions = [
      {
        label: "Buy",
        feedbackHeader: `You bought 10 shares!`,
        feedbackBody: (
          <Text>
            Some feedback here
          </Text>
        )
      },
      {
        label: "Don't buy",
        feedbackHeader: ``,
        feedbackBody: (
          <Text>
            Some feedback here
          </Text>
        )
      }
    ];
  
const HoldOrSellOptions = [
    {
      label: "Hold",
      feedbackHeader: ``,
      feedbackBody: (
        <Text>
          Some feedback here
        </Text>
      )
    },
    {
      label: "Sell",
      feedbackHeader: `You sold your shares!`,
      feedbackBody: (
        <Text>
          Some feedback here
        </Text>
      )
    }
  ]

const QuestionTwo: Question = {
  title:  `Help Alex make a decision: Invest or Don't Invest?`,
  description: `The stock increased a little.`,
  options: () => BuyOrHoldOptions,
}

const QuestionThree: Question = {
  title:  `Help Alex make a decision: Invest or Don't Invest?`,
  description: `Stock is shooting up.`,
  options: (prevAnswer) => 
    prevAnswer === 0 ? HoldOrSellOptions : BuyOrHoldOptions,
}

const QuestionFour: Question = {
  title:  `Help Alex make a decision: Invest or Don't Invest?`,
  description: `Stock is still increasing.`,
  options: (prevAnswer) => 
    prevAnswer === 0 ? HoldOrSellOptions : BuyOrHoldOptions,
}

const QuestionFive: Question = {
  title:  `Help Alex make a decision: Invest or Don't Invest?`,
  description: `Stock crashed!`,
  options: () => []
}


export const InvestGameQuestions: Question[] = [
  QuestionOne,
  QuestionTwo,
  QuestionThree,
  QuestionFour,
  QuestionFive,
]