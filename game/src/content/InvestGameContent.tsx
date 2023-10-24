import { Stack, Text, chakra, Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";
import Tree from "react-d3-tree"
import { DecisionTree } from "../components/DecisionTree";

// @ts-ignore
const ChakraTree = chakra(Tree)

const ReflectionPrisonerDilemma = () => (
  <>
    <Heading size="md">Reflection</Heading>
    <Text>
      Let's examine this from a strategic perspective with uncertainty. <br />
      <br />
          What we have just observed is "momentum trading".
          Momentum trading is like catching a wave at the beach.
          You see a stock rising for several days in a row, and it's tempting to ride that wave, hoping for more gains. <br />
      <br />
          However, there's a catch. Just as the ocean is unpredictable, so is the stock market.
          It's like a real-life version of the Prisoner's Dilemma, where everyone is trying to make the best decision. <br />
      <br />
          In this scenario, the "payoff" for selling as the stock price increases can be rewarding.
          But, here's where the uncertainty comes in – if too many traders decide to sell when it's high, the wave can come crashing down, and the price can plummet.
          This is where strategic interdependence comes into play - akin to how in the Prisoner's Dilemma, both prisoners are better off if they both stay silent (buy/ hold), but if one decides to talk (sell), they may get a reduced sentence while the other faces a harsh penalty.<br />
      <br />
          Price movement is always influenced by how other people are playing their strategies, creating a sense of strategic interdependence in the market. So, while riding the momentum wave can be profitable, it's essential to remember that the market is full of uncertainties, similar to the complex decisions that arise in the Prisoner's Dilemma
    </Text>
  </>
)


export interface AnswerOption {
  label: string;
  feedbackHeader: string;
  feedbackBody: ReactNode;
}

interface Question {
  title: string;
  description: string | ReactNode;
  options: (prevAnswer: number | null) => AnswerOption[];
}

const QuestionOne: Question = {
  title: `Help Alex make a decision: Invest or Don't Invest?`,
  description: (<>
    {`You have travelled back in time to the past, to 3 Jan 2020.`}
    <br />
    <br />
    {`Alex is wondering if it is wise to purchase the following asset as an investment. 
      The price of the asset is USD 208.67, and we know that in a year's time, the price will rise to USD 273.16.`}
    <br />
    <br />
    {`If Alex chooses not to invest, Alex will place his money into Alex's bank, which will only earn a 0.5% interest rate. 
      Effectively, Alex will lose 1% since inflation is at 1.5% annually.`}
  </>),
  options: () => [
    {
      label: "Invest",
      feedbackHeader: `Great answer!`,
      feedbackBody: (
        <Stack borderRadius={10} bg="purple.100" p={4} w="80%">
          <Heading size="md">Reflection</Heading>
          <Text>
            Let's examine this from a strategic perspective.<br />
            Alex has two possible decisions: Invest, and Don't Invest. <br />
            Alex's payoff from investing is +30.91%. Alex's payoff from not investing is -1%.<br />
            Alex thus has a dominant strategy: Invest. Inflation induces the dominant strategy for Alex to invest.<br />
          </Text>
          <DecisionTree data={{
            name: `Alex's Decisions`,
            children: [
              {
                name: "Invest",
                attributes: {
                  Payoff: "+30.91%"
                }
              },
              {
                name: `Don't Invest`,
                attributes: {
                  Payoff: "-1%"
                }
              }
            ]
          }} />
        </Stack>
      )
    },
    {
      label: "Don't invest",
      feedbackHeader: `Good attempt - unfortunately, that's not right!`,
      feedbackBody: (
        <Stack borderRadius={10} bg="purple.100" p={4} w="80%">
          <Heading size="md">Reflection</Heading>
          <Text>
            Let's examine this from a strategic perspective.<br />
              Alex has two possible decisions: Invest, and Don't Invest. <br />
              Alex's payoff from investing is +30.91%. Alex's payoff from not investing is -1%.<br />
              Alex thus has a dominant strategy: Invest. Inflation induces the dominant strategy for Alex to invest.<br />
          </Text>
          <DecisionTree data={{
            name: `Alex's Decisions`,
            children: [
              {
                name: "Invest",
                attributes: {
                  Payoff: "+30.91%"
                }
              },
              {
                name: `Don't Invest`,
                attributes: {
                  Payoff: "-1%"
                }
              }
            ]
          }} />
        </Stack>
      )
    }
  ]
}

const BuyOrHoldOptions = (roseBy = '7%') => [
  {
    label: "Buy",
    feedbackHeader: `You bought 10 shares!`,
    feedbackBody: (
      <Stack borderRadius={10} bg="pink.100" p={4} w="80%">
        <Heading size="md">Observation</Heading>
        <Text>
          Good call! The stock did rise indeed by {roseBy}.
        </Text>
      </Stack>
    )
  },
  {
    label: "Don't buy",
    feedbackHeader: ``,
    feedbackBody: (
      <Stack borderRadius={10} bg="pink.100" p={4} w="80%">
        <Heading size="md">Observation</Heading>
        <Text>
          Ah! The stock rose by {roseBy} the next day. It looks like the analysts were right.
          </Text>
      </Stack>
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
  title: `Should Alex purchase this stock?`,
  description: (
    <>
      {`Alex is interested in purchasing a stock.`}
      <br />
      {`He notices that the stock has been on an upward trend.`}
      <br />
      <br />
      {`In fact, analysts predict that the price of the asset will continue to rise.`}
    </>
  ),
  options: () => BuyOrHoldOptions('7%'),
}

const QuestionThree: Question = {
  title: `What should Alex do?`,
  description: (
    <>
      {`Alex notices that the stock rose yesterday.`}
      <br />
      <br />
      {`He notices that the stock continues to be on an upward trend.`}
      <br />
      <br />
      {`Again, analysts predict that the price of the asset will continue to rise.`}
      <br />
      <br />
      {`Alex comes to you for advice.`}
    </>
  ),
  options: (prevAnswer) =>
    prevAnswer === 0 ? HoldOrSellOptions : BuyOrHoldOptions('10%'),
}

const QuestionFour: Question = {
  title: `What should Alex continue to do?`,
  description: (
    <>
      {`Alex notices that the stock is still increasing.`}
      <br />
      <br />
      {`He is starting to get fidgety.`}
      <br />
      <br />
      {`He does not want to miss out on making a quick buck, but is scared that the price might drop soon.`}
      <br />
      <br />
      {`Analysts continue to recommend a Buy on the stock.`}
      <br />
      <br />
      {`Alex comes to you for advice.`}
    </>
  ),
  options: (prevAnswer) =>
    prevAnswer === 0 ? HoldOrSellOptions : BuyOrHoldOptions('15%'),
}

const QuestionFive: Question = {
  title: `Help Alex make a decision: Invest or Don't Invest?`,
  description: `Stock crashed!`,
  options: (prevAnswer) => prevAnswer === 0 ? [
    {
      label: "Hold",
      feedbackHeader: ``,
      feedbackBody: (
        <Stack borderRadius={10} bg="purple.100" p={4} w="80%">
          <Heading size="md">Observation</Heading>
          <Text>
            Oh no! The stock crashed. It tumbled by 70% in a day, and Alex lost all his money.
          </Text>
          <br />
          <ReflectionPrisonerDilemma />
        </Stack>
      )
    },
    {
      label: "Sell",
      feedbackHeader: `You sold your shares!`,
      feedbackBody: (
        <Stack borderRadius={10} bg="purple.100" p={4} w="80%">
          <Heading size="md">Observation</Heading>
          <Text>
            Phew - good call! The stock crashed. It tumbled by 70% in a day, and you helped Alex avoid losing all his money.
          </Text>
          <br />
          <ReflectionPrisonerDilemma />
        </Stack>
      )
    }
  ] : [
      {
        label: "Buy",
        feedbackHeader: `You bought 10 shares!`,
        feedbackBody: (
          <Stack borderRadius={10} bg="purple.100" p={4} w="80%">
            <Heading size="md">Observation</Heading>
            <Text>
              Oh no! The stock crashed. It tumbled by 70% in a day, and Alex lost all his money.
          </Text>
            <br />
            <ReflectionPrisonerDilemma />
          </Stack>
        )
      },
      {
        label: "Don't buy",
        feedbackHeader: ``,
        feedbackBody: (
          <Stack borderRadius={10} bg="purple.100" p={4} w="80%">
            <Heading size="md">Observation</Heading>
            <Text>
              Phew - good call! The stock crashed. It tumbled by 70% in a day, and you helped Alex avoid losing all his money.
          </Text>
            <br />
            <ReflectionPrisonerDilemma />
          </Stack>
        )
      }
    ]
}


export const InvestGameQuestions: Question[] = [
  QuestionOne,
  QuestionTwo,
  QuestionThree,
  QuestionFour,
  QuestionFive,
]