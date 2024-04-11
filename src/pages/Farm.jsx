import IconArrowDown from '@/assets/farm/arrow-down.png'
import { useNavigate } from 'react-router-dom'
import { getPoolList } from '../config/farm.config'
import { useEffect, useState } from 'react'
import { cacheData } from '../utils/helper'
import useContract from '../hooks/useContract'

export default () => {
  // const poolList = new Array(20).fill(0)

  const navigate = useNavigate()

  // const poolList = getPoolList()
  const [poolList, setPoolList] = useState([])
  const farmContract = useContract('farm')

  async function refreshPage() {
    const list = await cacheData('poolList', 60, async () => {
      const list = getPoolList()
      return await Promise.all(list.map(async item => {
        const resp = await farmContract.read('poolInfo', [item.id])
        item.lpAddr = resp[0]
        item.allocPoint = resp[1]
        item.stakeAmount = resp[4]
        return item
      }))
    })
    setPoolList(list)
  }

  function toPool(poolId) {
    navigate(`/web3/farm/pool?id=${poolId}`)
  }
  
  useEffect(() => {
    refreshPage()
  }, [])

  return (
    <div className="w-full h-full overflow-scroll py-[70px] bg-[#0E1622] bg-center bg-cover bg-[url('@/assets/farm/bg-page.png')]">
      <div className="w-[946px] mx-auto">
        {/* Title */}
        <div className="flex items-center ml-[15px]">
          <div className="w-[112px] h-[31px] px-[20px] bg-center bg-contain bg-[url('@/assets/farm/bg-info-small.png')] flex items-center justify-between cursor-pointer">
            <span className="text-[14px] text-white font-medium">全部</span>
            <img className="w-[10px] h-[5px]" src={IconArrowDown}/>
          </div>
          <div className="ml-[19px] w-[225px] h-[31px] px-[20px] bg-center bg-contain bg-[url('@/assets/farm/bg-info-big.png')] flex items-center justify-between text-[14px] font-medium text-white cursor-pointer">
            <span>Total TVL:</span>
            <span>0 USD</span>
          </div>
        </div>
        {/* POOL LIST */}
        <div className="flex items-center flex-wrap mt-[20px]">
          {
            poolList.map((pool, index) => (
              <div className="mx-[4px] w-[228px] h-[345px] bg-contain bg-center bg-[url('@/assets/farm/bg-card.png')] text-center" key={index}>
                {/* LOGO */}
                <div className="text-center mt-[52px]">
                  <img className="inline-block w-[40px] h-[40px]" src={pool.baseIcon}/>
                  { pool.isSingle || <img className="ml-[-20px] inline-block w-[40px] h-[40px]" src={pool.quoteIcon}/>
                  }
                </div>
                {/* TITLE */}
                <div className="text-white text-[16px] font-medium leading-[22px]">{pool.poolSymbol}</div>
                <div className="text-white text-[12px] leading-[17px]">存 {pool.stakeToken} 赚 {pool.earnToken}</div>
                {/* INFO */}
                <div className="mt-[19px] text-white text-[12px] flex flex-col items-center">
                  <div className="mb-[8px] w-[184px] px-[10px] h-[33px] flex justify-between items-center">
                    <span>APY</span><span>100%</span>
                  </div>
                  <div className="mb-[8px] w-[184px] px-[10px] h-[33px] flex justify-between items-center">
                    <span>总质押</span><span>{pool.stakeAmount} LP</span>
                  </div>
                  <div className="mb-[8px] w-[184px] px-[10px] h-[33px] flex justify-between items-center">
                    <span>TVL</span><span>0 USD</span>
                  </div>
                </div>
                {/* BTN */}
                <div className="w-[184px] h-[33px] mx-auto text-white text-[12px] leading-[33px] cursor-pointer" onClick={() => toPool(pool.id)}>进入矿池</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}