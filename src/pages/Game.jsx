import { Swiper, SwiperSlide } from "swiper/react"
import ImgFeature from '@/assets/game/feature2.png'
import { useNavigate } from "react-router-dom"
import ImgNft from '@/assets/game/img-nft.png'
import $api from '@/apis/index.js'
import { useEffect, useState } from "react"

function Title(props) {
  return (
    <div className="mt-[50px] mb-[40px] leading-[42px] text-[#FEF5DF] text-[30px] font-semibold">{props.children}</div>
  )
}

export default () => {
  const [featureGameList, setFeatureGameList] = useState([])
  const [spotlightGameList, setSpotlightGameList] = useState([])
  const refreshPage = async () => {
    const resp = await $api.homeWeb3()
    setFeatureGameList(resp.featureGameList)
    setSpotlightGameList(resp.spotlightGameList)
  }
  useEffect(() => { refreshPage() }, [])

  const navigate = useNavigate()
  const toDetail = (id) => {
    navigate(`/web3/game/detail?id=${id}`)
  }
  return (
    <div className="w-full bg-[#0E1622]">
      <div className="w-[1200px] p-[70px] mx-auto">
        {/* BANNER */}
        <div className="bg-center bg-cover bg-[url('@/assets/game/cover-main.png')] w-[1060px] h-[530px] pt-[309px] p-[50px]">
          <div className="">
            <div className="text-[#F5CD1D] text-[14px] font-semibold leading-[20px]">TownStory Galaxy</div>
            <div className="text-[#FFF8F8] text-[28px] font-semibold leading-[39px]">The FREE Play To Airdrop is live!</div>
            <div className="text-[#AFABA5] text-[14px] font-semibold leading-[20px] mt-[11px]">Compete in Beast Brawl Season 3, Complete Quests and Gain XP<br/>to earn a piece of the $KURO Airdrop!</div>
            <div className="text-black text-[16px] leading-[22px] px-[20px] py-[7px] bg-[#F5CD1D] rounded-[10px] cursor-pointer mt-[25px] inline-block" onClick={toDetail}>Play Now</div>
          </div>
        </div>
        {/* FEATURED GAME */}
        <Title>Featured Games</Title>
        <Swiper
          spaceBetween={90}
          slidesPerView='auto'
          centeredSlides={false}
        >
          {
            featureGameList.map((item, index) => (
              <SwiperSlide className="w-[210px]" key={index} onClick={() => toDetail(item.gameId)}>
                <img className="w-[210px] h-[300px] cursor-pointer" src={item.image}/>
              </SwiperSlide>
            ))
          }
        </Swiper>
        <Title>Spotlight</Title>
        <Swiper
          spaceBetween={90}
          slidesPerView='auto'
          centeredSlides={false}
        >
          {
            spotlightGameList.map((item, index) => (
                <SwiperSlide className="w-[380px]" key={index} onClick={() => toDetail(item.gameId)}>
                  <div className="w-[380px] h-[340px] bg-[#131C2F] cursor-pointer">
                    <img className="w-[380px] h-[220px]" src={item.image}/>
                    <div className="px-[20px] py-[28px] text-white text-[12px]">
                      {/* <div className="text-[#F5CD1D] leading-[17px]">Treasure Quests</div> */}
                      <div className="text-[14px] leading-[20px] my-[5px]">{item.title}</div>
                      <div className="text-[#B9B9B9] leading-[17px]">Announcement</div>
                    </div>
                  </div>
                </SwiperSlide>
            ))
          }
        </Swiper>
        {/* BANNER */}
        <div className="w-[1200px] mx-[-70px] mt-[50px] h-[456px] pt-[286px] px-[50px] bg-center bg-cover bg-[url('@/assets/game/cover-main.png')]">
          <div className="text-[14px] text-[#F5CD1D] font-semibold leading-[20px]">TownStory Galaxy</div>
          <div className="text-[28px] text-[#FFF8F8] font-semibold leading-[39px]">The FREE Play To Airdrop is live!</div>
          <div className="inline-block mt-[25px] bg-[#F5CD1D] py-[7px] px-[20px] rounded-[10px] text-black text-[16px] leading-[22px] cursor-pointer">Play Now</div>
        </div>
        {/* COLLECTIONS */}
        <Title>Trending Collections</Title>
        <table className="w-full text-center text-white text-[16px] font-medium">
          <thead>
            <tr className="h-[37px] text-[12px] font-semibold">
              <th className="text-left pl-[30px]">COLLECTION</th>
              <th>FLOOR CHANGE(1D)</th>
              <th>FLOOR</th>
              <th>FLOOR(1D AGO)</th>
              <th>VOLUME(1D)</th>
              <th>TOTAL VOLUME</th>
            </tr>
          </thead>
          <tbody>
            {
              new Array(10).fill(0).map((item, index) => (
                <tr className="h-[70px] bg-[#171D29] border-y-[10px] border-[#0E1622] cursor-pointer" key={index}>
                  <td>
                    <div className="flex items-center">
                    <img className="w-[40px] h-[40px] mr-[6px]" src={ImgNft}/>
                    <div>
                      <div>Kuroro Origin Beasts<span className="text-[#94989F] text-[12px]">- kuroro Beasts</span></div>
                      <div className="flex items-center"><img className="w-[12px] h-[12px] mr-[5px]"/><span className="text-[#94989F] text-[12px]">·5.5k Items·1% Listed</span></div>
                    </div>
                    </div>
                  </td>
                  <td className="text-[#22C15D]">30%</td>
                  <td>390</td>
                  <td>298</td>
                  <td>6.9K</td>
                  <td>578.1K</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        {/* SALES */}
        <Title>Recent Sales</Title>
        <div className="flex items-center flex-wrap mr-[-40px]">
          {
            new Array(10).fill(0).map((item, index) => (
              <div className="w-[230px] h-[335px] bg-[#1A202F] mb-[40px] mr-[40px] cursor-pointer" key={index}>
                <img className="w-[230px] h-[230px]" src={ImgNft}/>
                <div className="py-[20px] px-[15px]">
                  <div className="text-[12px] rounded-[31px] inline-block text-black bg-[#FACE61] px-[10px]">#4037</div>
                  <div className="mt-[16px] text-[12px] text-white font-semibold leanding-[17px]">Town Story OG Pass<span className="text-[#94989F]">-anto the Centaur</span></div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}