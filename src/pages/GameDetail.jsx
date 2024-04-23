import ImgCover from '@/assets/game/cover-main.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import ImgIcon from '@/assets/header/chain-arbi.png'
import ImgNft from '@/assets/game/img-nft.png'
import { useState } from 'react'

function Overview() {
  return (
    <div className="flex justify-center">
      {/* LEFT */}
      <div className="w-[800px]">
        <img className="w-[800px] h-[450px]" src={ImgCover} />
        <Swiper
          className="mt-[21px]"
          spaceBetween={28}
          slidesPerView={4.3}
          centeredSlides={false}
        >
          {
            new Array(5).fill(0).map((item, index) => (
              <SwiperSlide key={index}>
                <div className="w-[168px] h-[118px] p-[12px] bg-[#1E2634] rounded-[10px] cursor-pointer">
                  <img className="w-full h-full" src={ImgCover} />
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
        <div className="mt-[20px] p-[20px] rounded-[10px] bg-[#161D2C] text-white leading-[20px] text-[14px] font-medium">TownStoryGalaxy is a social business game based on Web3, created by the core development team of Zynga, a well-known game company in Silicon Valley. Players can build their own town in the game, communicate and interact with players around the world, and experience unparalleled social experience and adventure fun.</div>
      </div>
      {/* RIGHT */}
      <div className="w-[254px] ml-[34px]">
        <div className="ml-[14px] w-[240px] h-[48px] rounded-[10px] bg-[#FACE61] text-center text-[20px] text-black leading-[48px] font-medium cursor-pointer">Play</div>
        <div className="w-full mt-[10px] bg-[#131D2E] rounded-[10px] px-[10px] py-[20px]">
          <div className="flex items-center">
            <img className="w-[50px] h-[50px] rounded-[8px]" src={ImgCover} />
            <div className="ml-[10px] text-[16px] text-white font-medium">TownStoryGalaxy</div>
          </div>
          <div className="mt-[10px]">
            <div className="flex items-center justify-between text-[#9FA3A9] text-[14px] leading-[20px]">
              <div>Chain(s)</div>
              <img className="w-[15x] h-[15px]" src={ImgIcon} />
            </div>
            <div className="flex items-center justify-between text-[#9FA3A9] text-[14px] leading-[20px] mt-[5px]">
              <div>Developed By</div>
              <div className="text-white">Permadeath Studios</div>
            </div>
            <div className="flex items-center justify-between text-[#9FA3A9] text-[14px] leading-[20px] mt-[5px]">
              <div>GAME STATUS</div>
              <div className="text-white text-[12px] bg-[#222937] px-[8px] rounded-[66px]">Prototype</div>
            </div>
            <div className="flex items-center justify-between text-[#9FA3A9] text-[14px] leading-[20px]">
              <div>PLATFORMS</div>
              <img className="w-[15x] h-[15px]" src={ImgIcon} />
            </div>
            <div className="flex items-center justify-between text-[#9FA3A9] text-[14px] leading-[20px]">
              <div>TOTAL VOLUME</div>
              <img className="w-[15x] h-[15px]" src={ImgIcon} />
            </div>
            <div className="text-[#9FA3A9] text-[14px] leading-[20px] mt-[5px]">
              <div>GENDERS</div>
              <div className="text-white text-[12px] bg-[#222937] px-[8px] rounded-[66px] inline-block mt-[5px]">Deck Builder</div>
              <div className="text-white text-[12px] bg-[#222937] px-[8px] rounded-[66px] inline-block mt-[5px]">Strategy</div>
              <div className="text-white text-[12px] bg-[#222937] px-[8px] rounded-[66px] inline-block mt-[5px]">Roguelike</div>
              <div className="text-white text-[12px] bg-[#222937] px-[8px] rounded-[66px] inline-block mt-[5px]">Free to Play</div>
            </div>
            <div className="text-[#9FA3A9] text-[14px] leading-[20px] mt-[5px]">
              <div>PLAYER INFO</div>
              <div className="text-white text-[12px] bg-[#222937] px-[8px] rounded-[66px] inline-block mt-[5px]">Single Player</div>
            </div>
            <div className="text-[#9FA3A9] text-[14px] leading-[20px] mt-[5px]">
              <div>Competitive Framework</div>
              <div className="text-white text-[12px] bg-[#222937] px-[8px] rounded-[66px] inline-block mt-[5px]">PvE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Collection() {
  return (
    <div className="flex items-center flex-wrap py-[20px]">
      {
        new Array(10).fill(0).map((item, index) => (
          <div className="w-[230px] h-[335px] mr-[10px] mb-[20px] cursor-pointer" key={index}>
            <img className="w-[230px] h-[230px]" src={ImgNft}/>
            <div className="p-[20px] bg-[#1A202F]">
              <div className="flex items-center">
                <img className="w-[20px] h-[20px] mr-[10px]" src={ImgIcon}/>
                <div className="text-[16px] font-semibold text-white">Adventurers</div>
              </div>
              <div className="text-[#9FA3A9] text-[12px] leading-[17px] mt-[10px]">Adventurers are an ever-expanding collecti...</div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default () => {
  const menus = [
    { label: 'Overview', component: Overview },
    { label: 'Collections', component: Collection },
    { label: 'Tournaments', component: () => {} },
    { label: 'Leaderboard', component: () => {} },
    { label: 'Activity', component: () => {} },
    { label: 'Play', component: () => {} },
  ]
  const [activeMenu, setActiveMenu] = useState(menus[0])
  return (
    <div className="w-full min-h-full bg-[#0E1622]">
      <div className="w-full h-[258px] bg-center bg-cover bg-[url('@/assets/home/main-img.png')]"></div>
      <div className="w-[1090px] mx-auto">
        <div className="w-[800px] h-[62px] flex items-center justify-around text-white text-[16px] font-semibold">
          {
            menus.map((item, index) => (
              <div className="cursor-pointer" key={index} style={{color: activeMenu.label === item.label ? '#FACE61' : ''}} onClick={() => setActiveMenu(item)}>{item.label}</div>
            ))
          }
        </div>
        {
          activeMenu.component()
        }
      </div>
    </div>
  )
}