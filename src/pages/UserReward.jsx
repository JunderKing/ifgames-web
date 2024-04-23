export default () => {
  return (
    <div className="w-full bg-[#0E1622] text-white">
      <div className="w-[1140px] mx-auto px-[20px]">
        {/* AMOUNT */}
        <div className="text-[14px] font-semibold leading-[20px] pt-[20px]">CLAIM YOUR REWARD</div>
        <div className="text-[12px] font-medium leading-[17px] pt-[20px]">1. Check if you won a reward from this party</div>
        <div className="mt-[10px] flex items-center">
          <div className="w-[170px] py-[30px] px-[10px] bg-[#131D2E] rounded-[5px] flex flex-col items-center">
            <div className="text-[#8A8A90] text-[14px] font-semibold leading-[20px] pb-[16px]">Unclaimed</div>
            <div className="text-[48px] font-semibold leading-[67px]">0</div>
            <div className="text-[#8A8A90] text-[14px] font-semibold leading-[20px] pt-[16px]">IFG</div>
          </div>
          <div className="w-[170px] py-[30px] px-[10px] bg-[#131D2E] rounded-[5px] flex flex-col items-center ml-[20px]">
            <div className="text-[#8A8A90] text-[14px] font-semibold leading-[20px] pb-[16px]">Wallet Balance</div>
            <div className="text-[48px] font-semibold leading-[67px]">0</div>
            <div className="text-[#8A8A90] text-[14px] font-semibold leading-[20px] pt-[16px]">IFG</div>
          </div>
        </div>
        <div className="text-[12px] font-medium leading-[17px] pt-[20px]">2. Claim your reward</div>
        <div className="w-[169px] h-[37px] bg-[#F5CD1D] text-[#161D2C] text-[12px] font-semibold text-center leading-[37px] cursor-pointer mt-[10px] rounded-[5px]">Claim my reward</div>
        {/* TABLE */}
        <table className="w-full text-center mt-[30px]">
          <thead>
            <tr className="h-[37px]">
              <th>Token</th>
              <th>Action</th>
              <th>Tx</th>
              <th>Amount</th>
              <th className="text-end pr-[10px]">Time</th>
            </tr>
          </thead>
          <tbody>
            {
              new Array(10).fill(0).map((item, index) => (
                <tr className="h-[60px] bg-[#171D29] border-y-[10px] border-[#0E1622] text-[16px] font-medium" key={index}>
                  <td>IFG</td>
                  <td>REWARD</td>
                  <td className="cursor-pointer"><a>0x34ea...8bd8</a></td>
                  <td className="text-[#22C15D]">+1000</td>
                  <td className="text-end pr-[10px]">2024-01-01</td>
                </tr>
              ))
            }
          </tbody>

        </table>
      </div>
    </div>
  )
}