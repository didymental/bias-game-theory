import { ChakraProvider } from '@chakra-ui/react'
import { Home } from "./pages/Home"
import { InvestGame } from './pages/InvestGame'

const App = () => {
  return (
    <ChakraProvider>
      <Home />
      <InvestGame />
    </ChakraProvider>
  )
}
export default App;