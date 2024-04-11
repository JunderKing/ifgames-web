import { Route, Routes } from "react-router-dom";
import Web3Header from "../components/Web3Header";
import Wand from "../pages/Wand";
import Web3Menu from "../components/Web3Menu";
import { Web3ModalProvider } from "../providers/Web3Modal";
import Farm from "../pages/Farm";
import FarmPool from "../pages/FarmPool";

export default function Web3Layout() {
  return (
    <Web3ModalProvider>
      <Web3Header/>
      <div className="w-full flex" style={{height: 'calc(100vh - 80px)'}}>
        <Web3Menu/>
        <div className="flex-1 h-full overflow-scroll">
          <Routes>
            <Route path="wand" Component={Wand}/>
            <Route path="farm" Component={Farm}/>
            <Route path="farm/pool" Component={FarmPool}/>
          </Routes>
        </div>
      </div>
    </Web3ModalProvider>
  )
}