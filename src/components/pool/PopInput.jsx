import { message } from "antd"
import { useEffect, useState } from "react"

export default ({ options }) => {
  const { title, getBalance, onCancel, onConfirm } = options
  const [amount, setAmount] = useState('')
  const [balance, setBalance] = useState(0)

  const refreshBalance = async () => {
    const balance = await getBalance()
    setBalance(balance)
  }


  const handleConfirm = async () => {
    if (!amount) {
      return message.error("Please input amount")
    }
    await onConfirm(amount)
  }

  useEffect(() => {
    refreshBalance()
  }, [])

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50">
      <div className="fixed top-1/2 left-1/2 w-[410px] h-[260px] bg-[#17191B] transform -translate-x-[85px] -translate-y-1/2 flex flex-col items-center rounded-[8px] bg-[url('@/assets/farm/pool-pop.png')] bg-contain bg-center]">
        <div className="pt-[45px] text-[20px] leading-[28px] text-white">{title}</div>
        <div className="w-[350px] h-[40px] mt-[20px] px-[10px] flex items-center">
          <input className="w-full text-white text-[12px]" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="请输入数量"/>
        </div>
        <div className="flex justify-between items-center w-[350px] mt-[5px] px-[10px] text-[12px]">
          <div className="text-white">余额: {balance}</div>
          <div className="text-[#F5CD1D] cursor-pointer" onClick={() => setAmount(balance)}>全部</div>
        </div>
        <div className="flex items-center justify-center text-white text-[12px] mt-[30px]">
          <div className="w-[100px] h-[33px] rounded-full text-center leading-[33px] cursor-pointer" onClick={onCancel}>取消</div>
          <div className="w-[100px] h-[33px] rounded-full text-center leading-[33px] ml-[10px] cursor-pointer" onClick={handleConfirm}>确定</div>
        </div>
      </div>
    </div>
  )
}