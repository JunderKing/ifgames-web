import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomeLayout from './layouts/HomeLayout'
import Web3Layout from './layouts/Web3Layout'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/*" Component={HomeLayout}></Route>
        <Route path="/web3/*" Component={Web3Layout}></Route>
      </Routes>
    </Router>
  )
}

export default App
