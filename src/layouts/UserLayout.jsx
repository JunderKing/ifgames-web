import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import UserProfile from "../pages/UserProfile"
import { useState } from "react"
import UserRank from "../pages/UserRank"
import UserCollection from "../pages/UserCollection"
import UserReward from "../pages/UserReward"
import Farm from "../pages/Farm"

export default function UserLayout() {
  const location = useLocation()
  const path = location.pathname.split('/')[3]
  const [activeTab, setActiveTab] = useState(path)
  console.log({activeTab})
  const menus = [
    {label: 'MY PROFILE', route: 'profile'},
    {label: 'MY RANK', route: 'rank'},
    {label: 'IGO Pools', route: 'farm'},
    {label: 'Collections', route: 'collection'},
    {label: 'REWARDS', route: 'reward'},
  ]
  const navigate = useNavigate()
  const handleJump = path => {
    navigate("/web3/user/" + path)
    setActiveTab(path)
  }
  return (
    // HEADER
    <div className="bg-[#0E1622] text-white min-h-full">
      <div className="py-[30px] leading-[22px] w-[1100px] mx-auto text-[16px] font-semibold flex items-center space-x-[50px]">
        {
          menus.map((item, index) => (
            <div className={`cursor-pointer ${activeTab === item.route ? 'text-[#F5CD1D]' : ''}`} key={index} onClick={() => handleJump(item.route)}>{item.label}</div>
          ))
        }
      </div>
      <div className="overflow-scroll" style={{height: 'calc(100vh - 162px)'}}>
        <Routes>
          <Route path="profile" Component={UserProfile}></Route>
          <Route path="rank" Component={UserRank}></Route>
          <Route path="farm" Component={Farm}></Route>
          <Route path="collection" Component={UserCollection}></Route>
          <Route path="reward" Component={UserReward}></Route>
        </Routes>
      </div>
    </div>
  )
}