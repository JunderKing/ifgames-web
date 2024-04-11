import ImgWand1 from '@/assets/wand/wand1.png'
import ImgWand2 from '@/assets/wand/wand2.png'
import ImgWand3 from '@/assets/wand/wand3.png'
import ImgWand4 from '@/assets/wand/wand4.png'
import ImgWand5 from '@/assets/wand/wand5.png'
import ImgGradient from '@/assets/wand/gradient.png'
import ImgLine from '@/assets/wand/line.png'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import PopMint from '../components/wand/PopMint'
import PopWands from '../components/wand/PopWands'
import PopInvite from '../components/wand/PopInvite'
import $api from '@/apis/index.js'
import { useAccount, useChainId, useConfig, useReadContract } from 'wagmi'
import wandAbi from '@/config/abis/wandAbi.json'
import { readContract } from 'viem/actions'
import useContract from '../hooks/useContract'
import { message } from 'antd'

const StyledBtn = styled.div`
  display: inline-block;
  background: #F5CD1D;
  color: #000;
  font-size: 16px;
  line-height: 32px;
  padding: 0 30px;
  border-radius: 16px;
  margin: 0 10px;
  cursor: pointer;
`

export default function Wand() {

  const [curPop, setCurPop] = useState("")
  const [wandList, setWandList] = useState([])
  const [wandColors, setWandColors] = useState([])

  const { address } = useAccount()

  const wandContract = useContract('wand')
  const goldContract = useContract('gold')

  async function getWandList() {
    if (!address) return
    const list = await wandContract.read('userTokens', [ address ])
    const tempWandList = []
    const tempWandColors = []
    list.forEach((item, index) => {
      const tokenId = parseInt(item[0])
      const level = parseInt(item[1])
      const color = level === 0 ? 1 : Math.ceil(level / 20)
      tempWandColors.push(color)
      tempWandList.push({
        tokenId, level, color
      })
      setWandList(tempWandList)
      setWandColors(tempWandColors)
    })
  }

  async function handleMint(inviteCode) {
    if (!address) return message.error("Please connect wallet first")
    await $api.wandMint({
      wallet: address,
      inviteCode
    })
    message.success("Mint Success")
    getWandList()
  }

  async function handleDeposit(wand, amount) {
    // 1. chek balance
    const balance = parseInt(await goldContract.read('balanceOf', [address]))
    // 2. check allowance
    const allowance = parseInt(await goldContract.read('allowance', [address, wandContract.address]))
    // 3. approve
    if (allowance < amount) {
      await goldContract.write('approve', [wandContract.address, balance])
    }
    // 4. deposit
    await wandContract.write('deposit', [wand.tokenId, amount])
    message.success("Upgrade successfully!")
    getWandList()
  }

  async function handleWithdraw(wand, amount) {
    // 1. check unlock amount
    const unlockAmount = parseInt(await wandContract.read('unlockAmount', [wand.tokenId]))
    if (unlockAmount < amount) return message.error("Not enough unlocked token")
    // 2. withdraw
    await wandContract.write('withdraw', [wand.tokenId, amount])
    message.success("Withdraw successfully!")
    getWandList()
  }

  useEffect(() => {
    getWandList()
  }, [address])

  return (
    <div className="w-full h-full relative px-[70px] py-[30px] bg-[#0E1622] overflow-scroll">
      {/* PAGE */}
      <div className="mx-auto w-[1060px]">
        {/* TITLE */}
        <div className="text-white text-[16px] mb-[19px]">Collections</div>
        {/* BANNER */}
        <div className="w-[1060px] h-[381px] bg-center bg-contain bg-[url('@/assets/wand/wand-box.png')]">
          <div className="pt-[324px] text-center">
            <StyledBtn className="w-[198px]" onClick={() => setCurPop('mint')}>MINT</StyledBtn>
            <StyledBtn onClick={() => setCurPop('wands')}>MY WANDS</StyledBtn>
            <StyledBtn onClick={() => setCurPop('invite')}>INVITATION CODE</StyledBtn>
          </div>
        </div>
        {/* WANDS */}
        <div className="mt-[30px] flex justify-between items-center">
          {
            [ImgWand1, ImgWand2, ImgWand3, ImgWand4, ImgWand5].map((item, index) => (
              <div className="relative w-[202px] h-[389px]" key={index}>
                <img className="w-full h-full" src={item}/>
                {
                  !wandColors.includes(index+1) && <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
                }
              </div>
            ))
          }
        </div>
        <img className="mt-[20px] w-[1062px] h-[10px]" src={ImgGradient}/>
        <div>
          <img className="mt-[28px] w-[1062px] h-[1px]" src={ImgLine}/>
        </div>
      </div>

      {/* POPUPs */}
      {
        (() => {
          switch(curPop) {
            case 'mint':
              return <PopMint onClose={() => setCurPop('')} handleMint={handleMint}/>
            case 'wands':
              return <PopWands onClose={() => setCurPop('')} wandList={wandList} handleDeposit={handleDeposit} handleWithdraw={handleWithdraw}/>
            case 'invite':
              return  <PopInvite onClose={() => setCurPop('')}/>
          }
        })()
      }
    </div>
  )
}