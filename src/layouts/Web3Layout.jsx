import { Route, Routes } from "react-router-dom";
import Web3Header from "../components/Web3Header";
import Wand from "../pages/Wand";
import Web3Menu from "../components/Web3Menu";
import { Web3ModalProvider } from "../providers/Web3Modal";
import Farm from "../pages/Farm";
import FarmPool from "../pages/FarmPool";
import UserLayout from "./UserLayout";
import Game from "../pages/Game";
import GameDetail from "../pages/GameDetail";

export default function Web3Layout() {
  return (
    <Web3ModalProvider>
      <Web3Header/>
      <div className="w-full flex" style={{height: 'calc(100vh - 80px)'}}>
        <Web3Menu/>
        <div className="flex-1 h-full overflow-scroll">
          <Routes>
            <Route path="game" Component={Game}/>
            <Route path="game/detail" Component={GameDetail}/>
            <Route path="wand" Component={Wand}/>
            <Route path="farm" Component={Farm}/>
            <Route path="farm/pool" Component={FarmPool}/>
            <Route path="user/*" Component={UserLayout}/>
          </Routes>
        </div>
      </div>
    </Web3ModalProvider>
  )
}