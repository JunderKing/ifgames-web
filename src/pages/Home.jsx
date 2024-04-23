import TownImg from '@/assets/home/town-img.png'
import DiscoverImg from '@/assets/home/discover-img.png'
import BtmImg from '@/assets/home/btm-img.png'
import LogoWhite from '@/assets/home/logo-white.png'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import IconDivideAngle from '@/assets/header/divide-angle.png'
import ImgBanner1 from '@/assets/home/banner1.png'
import ImgBanner2 from '@/assets/home/banner2.png'
import ImgBanner3 from '@/assets/home/banner3.png'
import ImgBanner4 from '@/assets/home/banner4.png'
import ImgBanner5 from '@/assets/home/banner5.png'
import { Swiper, SwiperSlide } from 'swiper/react'

const StyledButton = styled.div`
  display: inline-block;
  background: #F5CD1D;
  color: #000;
  font-size: 12px;
  line-height: 17px;
  padding: 5px 15px;
  border-radius: 8px;
  cursor: pointer;
`;

export default function Home() {

  const navigate = useNavigate()
  const toWeb3 = () => {
    // navigate('/web3/game')
  }
  const handleSwipe = (swiper, progress) => {
    swiper.slides.forEach((slide, index) => {
      const scale = 1- (Math.abs(slide.progress) * 0.12)
      const offset = 12 * slide.progress * Math.abs(slide.progress) / 2
      let transformCss = `translateX(${offset}%) scale(${scale})`
      slide.style.transform = transformCss;  
    })
  }

  return (
    <div>

      {/* COVER */}
      <div className="w-full bg-cover bg-center bg-[url('@/assets/home/main-img.png')] bg-[#FFF4DA]" style={{height: '50vw'}}>
        <div className="pt-[13.98vw] pl-[9.07vw]">
          <div className=" text-[4.9vw] leading-[5vw] font-semibold text-white">Inifinite<br/>Games DAO</div>
          <div className="mt-[4vw] text-[1.38vw] leading-[1.66vw] text-white font-semibold">Explore the infinite<br/>possibillities of BTC Games</div>
          <div className="mt-[1.38vw] bg-[#F5CD1D] w-[9.26vw] h-[2.5vw] rounded-[0.74vw] text-[1.11vw] text-center leading-[2.5vw] cursor-pointer" onClick={toWeb3}>START</div>
        </div>
      </div>

      {/* DESC */}
      <div className="pt-[49px] bg-[#FFF4DA] flex justify-center">
        <div className="mr-[46px]">
          <div className="text-primary">
            <div className="text-[55px] font-medium">Infinite and Finite<br/>Games E/ACC</div>
            <div className="mt-[10px] text-[12px] font-medium">Explore the infinite possibilities of BTC Games</div>
          </div>
          <img className="mt-[109px] w-[772px] h-[434px]" src={TownImg}/>
        </div>
        <div className="text-[12px] w-[362px]">
          <div>
            <div>A finite game whose purpose is to win; Infinite games, but designed to keep the game going forever. Finite games play within boundaries, infinite games play within boundaries. Finite games have a definite beginning and end, with a specific winner, and rules exist to ensure that the game ends. Infinite play has neither a definite beginning and end nor a winner, and its purpose is to bring more people into the game itself, thereby continuing the game.</div>
            <div className="mt-[10px]">Infinite GamesDao will build a borderless game community in line with the spirit of BTC fundamentalism, self-extension and self-realization with the community as the singularity.</div>
          </div>
          <div>
            <div className="text-[40px] text-primary font-medium leading-[47px] mt-[157px] mb-[10px]">About<br/>InfiniteGames DAO</div>
            <div>InfiniteGames DAO provides a solution for BTC full chain game and BTC Layer2 . Bitseed protocol for developers to fairly launch assets on BTC. At the same time, the L2 solution based on Rooch technology maps BTC assets to L2 and realizes smart contracting. In addition, Infinite GamesDAO is committed to building a full-chain gaming community, building community consensus, and providing all the infrastructure and full-process solutions needed for gaming.</div>
            <div className="mt-[10px] w-[362px] h-[38px] rounded-[10px] bg-white flex items-center text-center leading-[12px] border-[#FFC79E] border-[1px] text-[10px] text-[#555]">BTC Seed Protocol+Rooch Fully On Chain L2/Merlin Chain+Others BTC Layer2 +Fully On Chain Game Community+∞</div>
          </div>
        </div>
      </div>

      {/* DIVIDIER */}
      <div className="w-full h-[30px] bg-center bg-[#F5CD1D]" style={{backgroundSize: '100% 100%'}}></div>

      {/* CAROUSEL */}
      <div className="bg-[#0E1622] pb-[66px]">
        <img className="w-[256px] h-[65px] mx-auto" src={IconDivideAngle}/>
        <div className="max-w-[1440px] m-auto">
          <div className="w-[151px] pt-[19px] relative ml-[130px]">
            <div className="w-[151px] h-[11px] bg-[#0A1FB8]"></div>
            <div className="text-white text-[30px] font-medium leading-[30px] absolute top-0 left-[4px] whitespace-nowrap">All Games</div>
            <div className="pl-[4px] mt-[9px] text-[#444] text-[15px] leading-[21px]">InfiniteGames DAO</div>
          </div>
          <Swiper
            spaceBetween={30}
            slidesPerView={'auto'}
            centeredSlides={true}
            watchSlidesProgress={true}
            onProgress={handleSwipe}
            loop={true}
          >
            {
              [ImgBanner1, ImgBanner2, ImgBanner3, ImgBanner1, ImgBanner2, ImgBanner4, ImgBanner5].map((item, index) => (
                <SwiperSlide className="w-[300px] cursor-pointer" key={index}>
                  <img className="w-[300px] h-[430px]" src={item} />
                </SwiperSlide>
              ))
            }
          </Swiper>
          <div className="text-white text-[14px] font-medium cursor-pointer text-center mt-[20px]">View ALL Games</div>
          <div className="flex items-center justify-between mt-[76px] ml-[130px] mr-[14px]">
            <div>
              <div className="w-[24px] pt-[77px] relative">
                <div className="w-[279px] h-[24px] bg-[#0A1FB8]"></div>
                <div className="text-white text-[50px] font-medium leading-[46px] absolute top-0 left-[4px] whitespace-nowrap">Discover<br/>game value</div>
                <div className="w-[271px] pl-[4px] mt-[8px] text-[#ccc] font-medium text-[12px] leading-[17px]">Participate in the game, complete the game missions, participate in the game promotion, build the game community, unlock double bonus points</div>
              </div>
              <StyledButton className="mt-[20px]">START</StyledButton>
            </div>
            <img className="ml-[10px] w-[980px] h-[562px]" src={DiscoverImg}/>
          </div>
        </div>
      </div>

      {/* BridgeWorld */}
      <div className="bg-center bg-cover bg-[url('@/assets/home/btm-bg.png')]">
        <div className="max-w-[1440px] h-[1085px] box-border flex items-center pl-[75px] pr-[130px] mx-auto">
          <img className="w-[810px] h-[810px]" src={BtmImg}/>
          <div className="text-white ml-[32px] w-[393px]">
            <div className="text-[14px] font-semibold">Bridgeworld is the center of the Treasure multiverse connecting our ecosystem’s loved IP and games together.</div>
            <StyledButton className="mt-[20px]">Get InfiniteWand</StyledButton>
            <img className="mt-[80px] w-[50px] h-[50px]" src={LogoWhite}/>
            <div className="mt-[20px] text-[14px] font-semibold">GOLD is InfiniteGames DAO game points, complete quests, participate in staking and get Gold rewards to play the BTC Layer2 eco-game</div>
            <StyledButton className="mt-[20px]">Do quests to earn GOLD</StyledButton>
          </div>
        </div>
      </div>
    </div>
  )
}