import React from 'react'
import { ToastContainer } from 'react-toastify'
import GlobalStyles from './styles/global.styles'
import Routes from './routes/Routes'

function App() {
  return (
    <>
      < GlobalStyles />
      < ToastContainer />
      <Routes />
    </>
  );
}

export default App;
