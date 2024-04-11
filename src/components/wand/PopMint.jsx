import ImgMain from '@/assets/wand/mint/img-main.png'
import ImgTitle from '@/assets/wand/mint/title.png'
import ImgClose from '@/assets/wand/pop-close.png'
import { message } from 'antd'
import { useState } from 'react'

export default (props) => {
  const [inviteCode, setInviteCode] = useState('')

  async function handleMint() {
    if (!inviteCode) {
      return message.error("Please input invitation code")
    }
    if (inviteCode.length != 8) {
      return message.error("Wrong invitation code")
    }
    await props.handleMint(inviteCode)
    props.onClose()
  }

  return (
    <div className="fixed top-1/2 left-1/2 w-[755px] h-[532px] bg-[#17191B] transform -translate-x-[257.5px] -translate-y-1/2 py-[20px] flex flex-col items-center rounded-[10px]">
      <img className="absolute top-[15px] right-[30px] w-[68px] h-[21px] cursor-pointer" src={ImgClose} onClick={props.onClose}/>
      <img className="w-[119px] h-[66px]" src={ImgTitle}/>
      <div className="mt-[10px]">
        <div className="text-white text-[14px] ml-[20px]">INVITATION CODE</div>
        <div className="mt-[10px] px-[20px] w-[695px] h-[37px] border-[1px] border-solid border-[#535353] rounded-full flex items-center">
          <input className="w-full text-white text-[12px] font-mono" spellCheck="false" placeholder="PLEASE ENTER INVITATION CODE"
            value={inviteCode} onChange={(e) => setInviteCode(e.target.value)}/>
        </div>
      </div>
      <img className="mt-[0px] w-[730px] h-[305px]" src={ImgMain}/>
      <div className="h-[30px] bg-[#F5CD1D] rounded-full px-[25px] flex flex-col items-center justify-center cursor-pointer">
        <div className="text-[14px] font-medium leading-[16px]" onClick={handleMint}>MINT</div>
        <div className="text-[12px] leading-[14px]">0.001ETH</div>
      </div>
    </div>
  )
}