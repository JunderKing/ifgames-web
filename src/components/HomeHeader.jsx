import logo from '@/assets/logo.png'
import IconArrowDown from '@/assets/header/arrow-down.png'
import IconMenuShare from '@/assets/header/menu-share.png'
import LinkYoutube from '@/assets/header/link-youtube.png'
import LinkTwitter from '@/assets/header/link-twitter.png'
import LinkTelegram from '@/assets/header/link-telegram.png'
import LinkDiscord from '@/assets/header/link-discord.png'
import { Link, useNavigate } from 'react-router-dom'

export default function PageHeader() {
  const navigate = useNavigate()
  const menus = [
    { label: 'About', icon: IconArrowDown },
    { label: 'Play', icon: IconMenuShare },
    { label: 'Build', icon: IconArrowDown },
    { label: 'Services', icon: IconArrowDown },
    { label: 'Splutions', icon: IconArrowDown },
    { label: 'Community', icon: IconArrowDown },
    { label: 'Blog', action: () => navigate('/blog') },
  ]
  const toWeb3 = () => {
    navigate('/web3/wand')
  }
  return (
    <div className="fixed top-0 left-0 w-full pt-[20px] px-[20px]" style={{zIndex: 100}}>
      <div className=" max-w-[1220px] h-[80px] px-[20px] mx-auto flex items-center justify-between bg-primary/70 text-white rounded-[10px]">
        <Link to="/">
          <img className='w-[70px] h-[70px] mr-[60px]' src={logo}/>
        </Link>
        <div className='flex flex-1'>
          { menus.map((item, index) => (
            <div className="font-[12px] font-medium mr-[20px] flex items-center cursor-pointer" key={index} onClick={() => item.action && item.action()}>{item.label}
            { item.icon && <img className='w-[10px] h-[10px] ml-[5px]' src={item.icon}/>}</div>
          ))}
        </div>
        <div className="flex items-center">
          <img className="w-[20px] h-[20px] ml-[10px] cursor-pointer" src={LinkTelegram}/>
          <img className="w-[20px] h-[20px] ml-[10px] cursor-pointer" src={LinkTwitter}/>
          <img className="w-[20px] h-[20px] ml-[10px] cursor-pointer" src={LinkDiscord}/>
          <img className="w-[20px] h-[20px] ml-[10px] cursor-pointer" src={LinkYoutube}/>
        </div>
        <div className="ml-[20px] text-primary text-[18px] text-center leading-[34px] font-semibold w-[134px] h-[34px] bg-cover bg-center bg-[url('@/assets/image/btn-header.png')] cursor-pointer" onClick={toWeb3}>Play Now</div>
      </div>
    </div>
  )
}