import './App.css'
import { ChakraProvider } from '@chakra-ui/react'  
import Login from './pages/public/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Fragment } from 'react'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Fragment>
          <Routes>
            <Route path='/login' element={<Login />} />

            <Route path='*' element={<Login />} />
          </Routes>
        </Fragment>
      </BrowserRouter>
      <Login />
    </ChakraProvider>
  )
}

export default App
