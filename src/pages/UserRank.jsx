import WandWhite from '@/assets/user/wand-white.png'
import WandGreen from '@/assets/user/wand-green.png'
import WandBlue from '@/assets/user/wand-blue.png'
import WandViolet from '@/assets/user/wand-violet.png'
import WandGolden from '@/assets/user/wand-golden.png'
import IconIndex from '@/assets/user/icon-index.png'

export default () => {
  const wandRules = [
    { name: 'WHITE', image: WandWhite, level: '0-20', upgrade: 'GRADE *800', equity: 'THE BASE MULTIPLE FOR OBTAINING THE INTEGRAL IS 1', other: 'PARTICIPATE IN GAMES AND EARN POINTS'},
    { name: 'GREEN', image: WandGreen, level: '21-40', upgrade: 'GRADE *1000', equity: 'The base multiple for obtaining the integral is 1.3', other: 'Participate in the game, get points, game props 98 percent off'},
    { name: 'BLUE', image: WandBlue, level: '41-60', upgrade: 'GRADE *3000', equity: 'The base multiple for obtaining the integral is 1.8', other: 'Participate in the game, get points, game props 95% off, the game test'},
    { name: 'VIOLET', image: WandViolet, level: '61-80', upgrade: 'GRADE *5000', equity: 'The base multiple for obtaining the integral is 2', other: 'Participate in the game, get points, game props 95% off, game test, game token airdrop'},
    { name: 'GOLDEN', image: WandGolden, level: '81-100', upgrade: 'GRADE *1000', equity: 'The base multiple for obtaining the integral is 3', other: 'Participate in the game, get points, game items 95% off, in-game test, in-game token airdrop, in-game transaction fee free, voting rights'},
  ]

  return (
    <div className="w-[1100px] mx-auto">
      {/* TITLE LINE */}
      <div className="flex items-center">
        <div className="w-[206px] h-[85px] bg-gradient-to-l from-[#161D2C] to-[#2A3752] rounded-[10px] p-[15px] flex items-center mr-[20px]">
          <img className="w-[50px] h-[50px] mr-[10px]" src={WandWhite}/>
          <div className="flex-col justify-between">
            <div className="text-[#8A8A90] text-[14px] font-semibold leading-[20px]">CURRENT RANK</div>
            <div className="text-[20px] font-semibold leading-[28px]">L 1</div>
          </div>
        </div>
        <div className="w-[874px] h-[85px] bg-[#161D2C] rounded-[10px] px-[40px] flex items-center justify-between">
          <div className="w-[180px]">
            <div className="text-[14px] font-semibold leading-[20px]">YOUR STAKE</div>
            <div className="text-[20px] font-semibold leading-[28px]">0</div>
          </div>
          <div className="flex-1">
            <div className="text-[14px] font-semibold leading-[20px]">$GAFI LEFT TO NEXT RANK</div>
            <div className="text-[20px] font-semibold leading-[28px]">0</div>
          </div>
          <div className="w-[124px] h-[37px] text-[#F5CD1D] border-[1px] border-[#F5CD1D] rounded-[5px] text-[12px] font-semibold text-center leading-[37px] cursor-pointer">UNSTAKE</div>
          <div className="w-[124px] h-[37px] text-[#161D2C] bg-[#F5CD1D] border-[1px] border-[#F5CD1D] rounded-[5px] text-[12px] font-semibold text-center leading-[37px] ml-[20px] cursor-pointer">STAKE</div>
        </div>
      </div>

      {/* TABLE */}
      <div className="mt-[20px] w-[1100px] rounded-[10px] bg-[#131D2E] p-[40px] text-white flex">
        <div className="w-[200px] text-white text-[12px] font-semibold">
          <div className="h-[135px]"></div>
          <div className="h-[67px] flex items-center">CLASS</div>
          <div className="h-[67px] flex items-center">UPGRADE POINTS</div>
          <div className="h-[67px] flex items-center">INTEGRAL EQUITY</div>
          <div className="h-[67px] flex items-center">OTHER RIGHTS AND INTERESTS</div>
        </div>
        {
          wandRules.map((item, index) => (
            <div className="w-[130px] text-[#8B8C8F] text-[12px] font-semibold text-center leading-[17px] ml-[40px]" key={index}>
              <div className="flex flex-col items-center">
                <img className="w-[100px] h-[100px]" src={item.image}/>
                <div className="text-[18px] text-white font-semibold leading-[25px] mt-[10px]">{item.name}</div>
              </div>
              <div className="h-[67px] flex items-center justify-center">{item.level}</div>
              <div className="h-[67px] flex items-center justify-center">{item.upgrade.toUpperCase()}</div>
              <div className="h-[67px] flex items-center justify-center">{item.equity.toUpperCase()}</div>
              <div className="h-[153px] flex justify-center pt-[20px]">{item.other.toUpperCase()}</div>
            </div>
          ))
        }
      </div>

      {/* RANK */}
      <div className="py-[30px] w-[1100px] mx-auto text-[16px] font-semibold flex items-center space-x-[50px]">
        <div className="cursor-pointer">STAKE</div>
        <div className="cursor-pointer">UNSTAKE</div>
        <div className="cursor-pointer">LEGENDARY RANKING</div>
      </div>
      <div className="w-[1100px] bg-[#131D2E] rounded-[10px] px-[32px] py-[10px]">
        <table className="w-full text-left">
          <thead className="text-[#8B8C8E] text-[12px] font-semibold">
            <tr className="h-[42px]">
              <th className="w-[200px]">RANK</th>
              <th>WALLET ADDRESS</th>
              <th>AMOUNT GAFI</th>
              <th className="text-right">BLOCK TIME</th>
            </tr>
          </thead>
          <tbody className="text-white text-[16px] font-semibold">
            {
              new Array(10).fill(0).map((item, index) => (
                <tr className="h-[80px]" key={index}>
                  <td><div className="w-[50px] h-[50px] bg-center bg-cover bg-[url('@/assets/user/icon-index.png')] flex items-center justify-center text-[28px] font-medium">{index+1}</div></td>
                  <td>0x4b7c20d7******517b2af634</td>
                  <td>38,645.178</td>
                  <td className="text-right">34495201</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}