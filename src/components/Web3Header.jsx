import { Link } from 'react-router-dom'
import Logo from '@/assets/logo.png'
import ChainArbi from '@/assets/header/chain-arbi.png'
import ArrowDown from '@/assets/header/arrow-down.png'
import IconNotice from '@/assets/header/icon-notice.png'
import IconGift from '@/assets/header/icon-gift.png'
import IconCart from '@/assets/header/icon-cart.png'
import ScoreLogo from '@/assets/header/score-logo.png'
import ScoreStar from '@/assets/header/score-star.png'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount, useSignMessage } from 'wagmi'
import { hideAddr } from '../utils/helper'
import { useEffect, useState } from 'react'
import $api from '@/apis/index'
import { message } from 'antd'

export default function Web3Header() {
  const { open } = useWeb3Modal()
  const { address } = useAccount()
  const { signMessage } = useSignMessage()
  const [keyword, setKeyword] = useState("")
  const [ifgAmount, setIfgAmount] = useState(0)

  const openNetwork = () => {
    open({ view: 'Networks'})
  }
  const openAccount = () => {
    open()
  }
  const refreshPage = async() => {
    const resp = await $api.goldBalance({ wallet: address })
    setIfgAmount(resp.balance)
  }
  const handleFaucet = async () => {
    if (!address) return message.error("Please connect walleet")
    const amount = parseInt(keyword) || 800
    await $api.goldFaucet({ wallet: address, amount})
    refreshPage()
    message.success(`成功领取${amount}测试IFG`)
  }
  const handleClaim = async () => {
    if (!address) return message.error("Please connect walleet")
    await $api.goldClaim({ wallet: address })
    refreshPage()
    message.success(`IFG提取成功`)
  }
  // const signMsg = async () => {
  //   console.log({keyword})
  //   signMessage({ message: keyword }, {
  //     onSuccess(result) {
  //       console.log({result})
  //     },
  //     onError(error) {
  //       console.log({error})
  //     }
  //   })
  // }
  useEffect(() => {
    refreshPage()
  }, [])

  return (
    <>
      {/* BLANK */}
      <div className="w-full h-[80px]"></div>

      {/* HEADER */}
      <div className="fixed top-0 left-0 w-full h-[80px] bg-primary flex items-center px-[70px] z-10">

        {/* LOGO */}
        <Link to="/">
          <img className="w-[70px] h-[70px]" src={Logo}/>
        </Link>

        {/* SEARCH */}
        <div className="flex-1">
          <div className="w-[252px] h-[34px] rounded-full bg-white bg-opacity-20 px-[20px] flex items-center ml-[120px]">
            <input className="w-full text-[14px] text-white leading-[16px]" placeholder="Search item here..." value={keyword} onChange={e => setKeyword(e.target.value)}/>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center">

          <div className="flex items-center justify-center w-[52px] h-[34px] bg-[#07199F] rounded-[10px] cursor-pointer" onClick={openNetwork}>
            <img className="w-[20px] h-[20px]" src={ChainArbi}/>
            <img className="w-[12px] h-[7px] ml-[4px]" src={ArrowDown}/>
          </div>

          <img className="w-[34px] h-[34px] ml-[5px] cursor-pointer" src={IconNotice}/>
          <img className="w-[34px] h-[34px] ml-[5px] cursor-pointer" src={IconGift} onClick={handleFaucet}/>
          <img className="w-[34px] h-[34px] ml-[5px] cursor-pointer" src={IconCart}/>

          <div className="py-[7px] px-[10px] bg-[#07199F] flex items-center text-[18px] text-white ml-[10px] rounded-[10px] cursor-pointer">
            <div className="flex items-center">
              <img className="w-[20px] h-[20px] mr-[5px]" src={ScoreLogo}/>
              <div className="leading-[20px]">0</div>
            </div>
            <div className="flex items-center ml-[8px]" onClick={handleClaim}>
              <img className="w-[20px] h-[20px] mr-[5px]" src={ScoreStar}/>
              <div className="leading-[20px]">{ifgAmount}</div>
            </div>
          </div>
          <div className="ml-[10px] w-[142px] h-[34px] text-[18px] font-semibold text-center leading-[34px] bg-[url('@/assets/header/bg-btn.png')] cursor-pointer" style={{backgroundSize: '100% 100%'}} onClick={openAccount}>{hideAddr(address) || 'Connect Wallet'}</div>
        </div>
      </div>
    </>
  )
}