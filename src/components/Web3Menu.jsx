import IconGame from '@/assets/menu/game.png'
import IconQuest from '@/assets/menu/quest.png'
import IconMarket from '@/assets/menu/market.png'
import IconMint from '@/assets/menu/mint.png'
import IconResource from '@/assets/menu/resource.png'
import IconTwitter from '@/assets/menu/twitter.png'
import IconDiscord from '@/assets/menu/discord.png'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Web3Menu() {
  const location = useLocation()
  const navigate = useNavigate()
  const menuList = [
    { label: 'Games', icon: IconGame, path: '/web3/game', children: []},
    { label: 'Quests', icon: IconQuest, children: []},
    { label: 'MarketPlace', icon: IconMarket, children: []},
    { label: 'Earn', icon: IconGame, path: '/web3/farm', children: []},
    { label: 'Mints', icon: IconMint, path: '/web3/wand', children: []},
    { label: 'Resources', icon: IconResource, children: []},
    { label: 'Follow us', icon: IconTwitter, children: []},
    { label: 'Join the community', icon: IconDiscord, children: []},
  ]

  return (
    <div className="w-[240px] h-full bg-[#101827] pt-[72px] border-r-[2px] border-[#282F3D] space-y-[25px]">
      {
        menuList.map((item, index) => (
          <div className="ml-[32px] text-white text-[14px] flex items-center cursor-pointer" key={index} onClick={() => item.path && navigate(item.path)}>
            <img className="w-[20px] h-[20px] mr-[15px]" src={item.icon}/>
            <div className={item.path && location.pathname.startsWith(item.path) ? "text-[#F5CD1D]" : "text-white"}>{item.label}</div>
          </div>
        ))
      }
    </div>
  )
}