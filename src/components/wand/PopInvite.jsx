import ImgClose from '@/assets/wand/pop-close.png'
import IconCopyDisable from '@/assets/wand/invite/copy-disable.png'
import IconCopyActive from '@/assets/wand/invite/copy-active.png'
import { message } from 'antd'
import $api from '@/apis/index.js'
import { useAccount } from 'wagmi'
import { useEffect, useState } from 'react'

export default (props) => {
  const [inviteCodes, setInviteCodes] = useState([])
  const { address } = useAccount()

  async function getInviteCodes() {
    if (!address) return message.error("Please connect wallet")
    const resp = await $api.userInviteCode({wallet: address})
    setInviteCodes(resp.list)
  }

  async function handleCopy(item) {
    if (item.status !== 0) return message.error("Already used")
    navigator.clipboard.writeText(item.code)
    message.success("Copy success")
  }

  useEffect(() => {
    getInviteCodes()
  }, [])

  return (
    <div className="fixed top-1/2 left-1/2 w-[481px] h-[392px] bg-[#17191B] transform -translate-x-[120.5px] -translate-y-1/2 py-[20px] flex flex-col items-center rounded-[10px]">
      <img className="absolute top-[15px] right-[20px] w-[68px] h-[21px] cursor-pointer" src={ImgClose} onClick={props.onClose}/>
      <div className="text-[30px] text-white font-medium leading-[42px]">INVITE FRIENDS</div>
      <div className="mt-[20px] p-[20px] w-[441px] h-[280px] border-[1px] border-solid border-[#535353] rounded-[10px]">
        <div className="text-[#BDBDBD] text-[14px]">My Invitation Code</div>
        {
          inviteCodes.map((item, index) => (
            <div className="flex justify-between items-center mt-[15px]" key={index}>
              <div className={`text-[20px] font-mono ${item.status === 0 ? 'text-white' : 'text-[#BDBDBD]'}`}>{item.code}</div>
              <div className="w-[81px] h-[28px] rounded-[5px] bg-[#F5CD1D] flex items-center justify-center cursor-pointer" onClick={() => handleCopy(item)}>
                <span className={`${item.status === 0 ? 'text-white' : 'text-[#D7D7D7]'} text-[14px]`}>Copy</span>
                  <img className="w-[18px] h-[18px]" src={item.status === 0 ? IconCopyActive : IconCopyDisable}/>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )

}