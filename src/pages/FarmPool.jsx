import { useEffect, useState } from "react"
import PopInput from "../components/pool/PopInput"
import useErc20 from "../hooks/useErc20"
import { useSearchParams } from "react-router-dom"
import { getPoolConf } from "../config/farm.config"
import useContract from "../hooks/useContract"
import { useAccount } from "wagmi"
import { message } from "antd"
import CountUp from 'react-countup';

export default () => {
  // 获取路由参数
  const [searchParams] = useSearchParams()
  const poolId = parseInt(searchParams.get('id'))
  const poolConf = getPoolConf(poolId)
  // 获取矿池配置
  const [popConf, setPopConf] = useState({})
  const lpErc20 = useErc20(poolConf.stakeToken)
  const farmContract = useContract('farm')
  const { address } = useAccount()

  const [profitAmounts, setProfitAmounts] = useState([0, 0])
  const [depositAmounts, setDepositAmounts] = useState([0, 0])

  const refreshProfit = async () => {
    if (!address) return
    console.log('refreshProfit')
    const resp = await farmContract.read('pending', [poolId, address])
    setProfitAmounts(profitAmounts => [profitAmounts[1], parseInt(resp)])
  }

  const refreshDeposit = async () => {
    if (!address) return
    const resp = await farmContract.read('userInfo', [poolId, address])
    setDepositAmounts([depositAmounts[1], parseInt(resp[0])])
  }

  const refreshPage = async () => {
    refreshProfit()
    refreshDeposit()
  }

  const showWithdraw = () => {
    setPopConf({
      status: true,
      title: `提取 ${poolConf.stakeToken}`,
      getBalance: async () => depositAmounts[1],
      onCancel: () => setPopConf({}),
      onConfirm: handleWithdraw
    })
  }
  const showDeposit = () => {
    setPopConf({
      status: true,
      title: `质押 ${poolConf.stakeToken}`,
      getBalance: async () => parseInt(await lpErc20.read('balanceOf', [address])),
      onCancel: () => setPopConf({}),
      onConfirm: handleDeposit
    })
  }

  const handleWithdraw = async (amount) => {
    if (amount <= 0 && profitAmounts[1] <= 0) {
      return message.error("Not enough profit")
    }
    await farmContract.write('withdraw', [poolId, amount])
    message.success("Withdraw success")
    setPopConf({})
    refreshPage()
  }

  const handleDeposit = async (amount) => {
    if (!address) {
      throw new Error("Please connect wallet")
    }
    await lpErc20.mustApprove(farmContract.address, amount)
    await farmContract.write('deposit', [poolId, amount])
    message.success("Deposit success")
    setPopConf({})
    refreshPage()
  }

  const handleProfitWithdraw = async () => {
    handleWithdraw(0)
  }

  useEffect(() => {
    refreshPage()
    const intervalId = setInterval(refreshProfit, 5000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="w-full h-full bg-[#0E1622] bg-center bg-cover bg-[url('@/assets/farm/bg-page.png')]">
      <div className="mx-auto w-[952px] pt-[96px] flex flex-col items-center">
        <div className="w-[990px] h-[87px] bg-contain bg-center bg-[url('@/assets/farm/pool-bg-title.png')] text-[48px] text-white flex items-center justify-center">
          <span className="text-[#F5CD1D]">存&nbsp;</span>{poolConf.stakeToken}<span className="text-[#F5CD1D]">&nbsp;赚&nbsp;</span>{poolConf.earnToken}
        </div>
        <div className="mt-[104px] flex items-center">
          {/* CARD */}
          <div className="w-[460px] h-[240px] bg-contain bg-center bg-[url('@/assets/farm/pool-bg-card-left.png')]">
            <div className="pt-[61px] pl-[223px] text-white">
              <div className="text-[20px] leading-[28px]">IFG 收益</div>
              <div className="text-[38px] leading-[53px] font-mono">
                <CountUp start={profitAmounts[0]} end={profitAmounts[1]} duration={1} separator=""/>
              </div>
              <div className="flex items-center mt-[10px]">
                <div className="w-[100px] h-[33px] rounded-full leading-[33px] text-center text-[12px] bg-[#575A71] cursor-pointer" onClick={handleProfitWithdraw}>提取</div>
              </div>
            </div>
          </div>
          {/* CARD */}
          <div className="ml-[20px] w-[460px] h-[240px] bg-contain bg-center bg-[url('@/assets/farm/pool-bg-card-right.png')]">
            <div className="pt-[61px] pl-[223px] text-white">
              <div className="text-[20px] leading-[28px]">{poolConf.stakeToken} 抵押</div>
              <div className="text-[38px] leading-[53px] font-mono">
                <CountUp start={depositAmounts[0]} end={depositAmounts[1]} duration={1} separator=""/>
              </div>
              <div className="flex items-center mt-[10px]">
                <div className="w-[100px] h-[33px] rounded-full leading-[33px] text-center text-[12px] bg-[#575A71] cursor-pointer" onClick={showWithdraw}>提取</div>
                <div className="ml-[10px] w-[100px] h-[33px] rounded-full leading-[33px] text-center text-[12px] bg-[#222435] cursor-pointer" onClick={showDeposit}>抵押</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        popConf.status && <PopInput options={popConf}/>
      }
    </div>
  )
}