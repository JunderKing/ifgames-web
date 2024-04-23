import ImgNft from '@/assets/game/img-nft.png'

export default () => {
  return (
    <div className="w-[1100px] mx-auto flex flex-wrap items-center">
      {
        new Array(10).fill(0).map((item, index) => (
          <div className="w-[230px] h-[300px] bg-[#1A202F] rounded-[10px] mr-[30px] mb-[30px] cursor-pointer" key={index}>
            <img className="w-[230px] h-[230px]" src={ImgNft}/>
            <div className="py-[20px] px-[30px] flex items-center">
              <img className="w-[30px] h-[30px] mr-[10px]" src={ImgNft}/>
              <div className="text-white text-[16px] font-medium">TownStoryGalaxy</div>
            </div>
          </div>
        ))
      }
    </div>
  )
}