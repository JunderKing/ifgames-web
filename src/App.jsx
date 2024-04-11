import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomeLayout from './layouts/HomeLayout'
import Web3Layout from './layouts/Web3Layout'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" Component={HomeLayout}></Route>
        <Route path="/web3/*" Component={Web3Layout}></Route>
      </Routes>
    </Router>
  )
}

export default App
