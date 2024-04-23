import IconUserDefault from '@/assets/user/user-default.png'
import IconCopy from '@/assets/user/icon-copy.png'
import IconAdd from '@/assets/user/icon-add.png'
import CoinEth from '@/assets/user/coin-eth.png'
import CoinMatic from '@/assets/user/coin-matic.png'
import CoinBnb from '@/assets/user/coin-bnb.png'
import CoinBtc from '@/assets/user/coin-btc.png'
import CoinTon from '@/assets/user/coin-ton.png'
import CoinSei from '@/assets/user/coin-sei.png'
import CoinSui from '@/assets/user/coin-sui.png'
import CoinSol from '@/assets/user/coin-sol.png'

export default function UserProfile() {
  const wallets = [
    { chain: 'BTC', icon: CoinBtc, address: 'bc1qqecspdlg3yjqyehrlqza3muz5yx2ql2m5svvgw' },
    { chain: 'TON', icon: CoinTon, address: '' },
    { chain: 'SEI', icon: CoinSei, address: '' },
    { chain: 'SUI', icon: CoinSui, address: '' },
    { chain: 'SOL', icon: CoinSol, address: '' },
  ]
  return (
    <div className="text-white flex w-[1100px] mx-auto">
      {/* MAIN WALLET */}
      <div className="w-[225px] h-[222px] bg-[#161D2C] rounded-[10px] p-[20px]">
        <div className="flex items-center">
          <img className="w-[50px] h-[50px]" src={IconUserDefault}/>
          <div className="text-[16px] font-medium ml-[10px]">名字</div>
        </div>
        <div className="mt-[20px] text-[14px] leading-[20px]">Main Wallet Address</div>
        <div className="mt-[5px] w-[185px] h-[40px] border-[1px] border-[#434B5C] rounded-[10px] flex items-center justify-between p-[10px]">
          <div className="flex items-center space-x-[-10px]">
            <img className="w-[20px] h-[20px]" src={CoinEth}/>
            <img className="w-[20px] h-[20px]" src={CoinMatic}/>
            <img className="w-[20px] h-[20px]" src={CoinBnb}/>
          </div>
          <div className="text-[#BDBDBD] text-[14px] ml-[10ppx] flex-1">0xc99....ef8e</div>
          <img className="w-[15px] h-[15px] cursor-pointer" src={IconCopy}/>
        </div>
      </div>
      {/* SUB WALLET */}
      <div className="w-[610px] h-[491px] p-[20px] rounded-[10px] bg-[#161D2C] mx-[20px]">
        <div className="text-[14px] font-semibold leading-[20px] mb-[10px]">SUB-WALLET ADDRESS <span className="font-light text-[#434B5C]">(Optional)</span></div>
        {
          wallets.map((item, index) => (
            <div className="mb-[20px]" key={index}>
              <div className="mb-[5px]">{item.chain} Wallet</div>
              <div className="w-[570px] h-[40px] border-[1px] border-[#434B5C] px-[20px] rounded-[10px] flex items-center justify-between">
                <img className="w-[20px] h-[20px] mr-[20px]" src={item.icon}/>
                <div className="flex-1 text-[14px] text-[#BDBDBD]">{item.address ? item.address : 'Not connected'}</div>
                <img className="w-[15px] h-[15px] cursor-pointer" src={item.address ? IconCopy : IconAdd}/>
              </div>
            </div>
          ))
        }
      </div>
      {/* INFORMATION */}
      <div className="w-[225px] h-[222px] bg-[#161D2C] rounded-[10px] flex-col items-center text-white p-[20px]">
        <div className="text-[14px] font-semibold">ACCOUNT INFORMATION</div>
        <div className="text-[#D2D3D4] text-[12px] font-light leading-[17px] mt-[20px]">You must stake $GAFI to achieve min Rank (Rookie) before KYC.</div>
        <div className="mt-[30px] w-[185px] h-[30px] rounded-[58px] bg-[#FACE61] text-[#161D2C] text-[14px] font-medium text-center leading-[30px] cursor-pointer">Play</div>
      </div>
    </div>
  )
}