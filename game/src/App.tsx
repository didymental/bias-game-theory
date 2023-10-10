import { Box, ChakraProvider, Stack } from '@chakra-ui/react'
import { Home } from "./pages/Home"
import { InvestGame } from './pages/InvestGame'
import { BaseLayout, NavBar } from './layouts/BaseLayout'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }, {
    path: "/invest-game",
    element: <InvestGame />
  }
]
)

const App = () => {
  return (
    <ChakraProvider>
      <BaseLayout>
        <RouterProvider router={router} />
      </BaseLayout>
    </ChakraProvider>
  )
}
export default App;