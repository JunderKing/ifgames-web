import ImgBanner1 from '@/assets/blog/banner1.png'
import ImgBanner2 from '@/assets/blog/banner2.png'
import ImgBanner3 from '@/assets/blog/banner3.png'
import ImgBanner4 from '@/assets/blog/banner4.png'
import ImgBanner5 from '@/assets/blog/banner5.png'
import ImgBanner6 from '@/assets/blog/banner6.png'
import { useNavigate } from 'react-router-dom'
import 'swiper/css';

export default () => {
  const blogs = [
    { intro: 'Infinite Wand: A mystical wand that leads to the infinite possibilities of the InfiniteGamesDAO', image:  ImgBanner1 },
    { intro: 'InfiniteGames DAO Points (Infinite Gold) acquisition rules & Guild introduction', image:  ImgBanner2 },
    { intro: 'The Web3 version of Animal Crossing: TownStory Galaxy will launch closed beta on April 1', image:  ImgBanner3 },
    { intro: 'To All Global Gaming Enthusiasts and Web3 Explorers', image:  ImgBanner4 },
    { intro: 'TownStory - Game | PlayToEarn', image:  ImgBanner5 },
    { intro: 'TownStoryGalaxy will conduct airdrops targeting active users of the TreasureDAO community', image:  ImgBanner6 },
  ]

  const navigate = useNavigate()
  function toDetail() {
    navigate("/blog/detail")
  }

  return (
    <div className="w-full min-h-full bg-[#101827] text-white">
      <div className="w-[1010px] pt-[130px] pb-[20px] mx-auto">
        <div className="text-[30px] font-medium leading-[46px]">Blog</div>
        <div className="mt-[20px] w-full flex flex-wrap items-center justify-between">
          {
            blogs.map((item, index) => (
              <div className="w-[310px] h-[255px] cursor-pointer mb-[40px]" key={index} onClick={toDetail}>
                <img className="w-[310px] h-[174px]" src={item.image}/>
                <div className="mt-[10px] text-[12px] font-medium leading-[17px]">{item.intro}</div>
                <div className="my-[15px] flex items-center justify-between">
                  <div className="text-[12px] font-medium">yesterday</div>
                  <div className="text-[16px] font-medium">Read Now</div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}