import ImgClose from '@/assets/wand/pop-close.png'
import ImgWand1 from '@/assets/wand/wands/wand1.png'
import ImgWand2 from '@/assets/wand/wands/wand2.png'
import ImgWand3 from '@/assets/wand/wands/wand3.png'
import ImgWand4 from '@/assets/wand/wands/wand4.png'
import ImgWand5 from '@/assets/wand/wands/wand5.png'
import styled from 'styled-components'
import { useAccount } from 'wagmi'
import { message } from 'antd'
import { useState } from 'react'

const StyledBtn = styled.div`
  background: #F5CD1D;
  border-radius: 54px;
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`
const IMAGE_MAP = {
  1: ImgWand1,
  2: ImgWand2,
  3: ImgWand3,
  4: ImgWand4,
  5: ImgWand5,
}

export default (props) => {
  let defaultWand = null
  if (props.wandList.length > 0) {
    defaultWand = props.wandList[0]
  }
  const [wandSelected, setWandSelected] = useState(defaultWand)
  const { address } = useAccount()

  async function handleDeposit() {
    if (!wandSelected) return message.error("Please select a wand")
    if (!address) return message.error("Please connect wallet")

    await props.handleDeposit(wandSelected, 800)
  }

  async function handleWithdraw() {
    if (!wandSelected) return message.error("Please select a wand")
    if (!address) return message.error("Please connect wallet")

    await props.handleWithdraw(wandSelected, 800)
  }

  return (
    <div className="fixed top-1/2 left-1/2 w-[755px] h-[540px] bg-[#17191B] transform -translate-x-[257.5px] -translate-y-1/2 py-[20px] flex flex-col items-center rounded-[8px]">
      <img className="absolute top-[15px] right-[30px] w-[68px] h-[21px] cursor-pointer" src={ImgClose} onClick={props.onClose} />
      <div className="text-white text-[30px] font-medium leading-[42px]">MY WAND</div>
      <div className="w-[630px] h-[378px] mt-[10px] flex flex-wrap overflow-scroll">
        {
          props.wandList.map((item, index) => (
            <div className={`relative w-[106px] h-[106px] m-[10px] bg-contain bg-center border-[2px] rounded-[10px] cursor-pointer`}
              style={{ 
                backgroundImage: `url(${IMAGE_MAP[item.color]})`,
                borderColor: wandSelected?.tokenId === item.tokenId ? '#F5CD1D' : '#17191B'
              }}
              key={index} onClick={() => setWandSelected(item)}>
              <div className="absolute bottom-0 left-0 w-full h-[30px] bg-black bg-opacity-50 text-center text-white text-[12px] font-bold rounded-b-[10px]">Level {item.level}</div>
            </div>
          ))
        }
      </div>
      <div className="mt-[20px] flex">
        <StyledBtn onClick={handleDeposit}>UPGRADE</StyledBtn>
        <StyledBtn className="ml-[45px]" onClick={handleWithdraw}>WITHDRAW</StyledBtn>
      </div>
    </div>
  )
}