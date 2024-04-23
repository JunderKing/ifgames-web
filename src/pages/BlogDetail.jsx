import IconBack from '@/assets/blog/arrow-back.png'
import ImgBanner from '@/assets/blog/banner2.png'
import IconLinkX from '@/assets/blog/link-x.png'
import IconLinkFb from '@/assets/blog/link-fb.png'
import IconLinkIns from '@/assets/blog/link-ins.png'
import IconLinkLk from '@/assets/blog/link-lk.png'
import { useNavigate } from 'react-router-dom'

export default () => {
  const navigate = useNavigate()

  return (
    <div className="w-full bg-[#101827] pt-[130px] pb-[40px] text-white">
      <div className="w-[924px] mx-auto">
        {/* Navigator */}
        <div className="flex items-center text-[30px] font-medium cursor-pointer" onClick={() => navigate(-1)}>
          <img className="w-[30px] h-[30px] mr-[20px]" src={IconBack} />
          Blog
        </div>

        <div className="w-full flex justify-between">
          {/* LEFT */}
          <div className="w-[668px]">
            <div className="text-[40px] leading-[56px] mt-[30px] font-semibold">To All Global Gaming Enthusiasts and Web3 Explorers</div>
            <div className="text-[10px] font-semibold leading-[17px] mt-[10px]">2024-03-25</div>
            <img className="w-[668px] h-[376px] mt-[10px]" src={ImgBanner} />
            <div className="mt-[20px] text-[14px] leading-[20px]">In this era of profound transformation, we find ourselves at a crucial crossroads in human history, witnessing a monumental shift from carbon-based to silicon-based, from physical to virtual. This is not just a progression in technology but a leap in civilization itself. Games, as a part of human culture and social development, have long served as vehicles for communication, education, and exploration. From ancient Egyptian board games to modern electronic entertainment, games have been the epitome of wisdom, the torchbearer of civilizational progress. Today, we proudly announce the establishment of InfiniteGames DAO, a community dedicated to leading games into the Web3 era, ushering in a new chapter of encrypted silicon-based cultural evolution. <br /><br />The Golden Epoch of Human Gaming Ever since ancient humans depicted hunting scenes on cave walls, games have served as a means to simulate reality, transmit knowledge, and preserve culture. They allow us to transcend time and space, experiencing different lives and understanding diverse thoughts. From Chinese Go to Greek Olympics, games have been the crystallization of human wisdom, the driving force of societal advancement. Today, with the advent of digital technology, we are witnessing the golden age of gaming. The virtual world has become an extension of the real world, offering us unprecedented immersive experiences. <br /><br />The Fusion of Encrypted Silicon-based Culture and Gaming Throughout the course of human history, each stride in culture and technology has marked a new phase in our civilization. Encrypted silicon-based culture represents another significant step toward a silicon-based civilization for humanity. With the birth and advancement of artificial intelligence (AI), we are rapidly transitioning into a new era based on silicon. In this new era, the amalgamation of encrypted technology and silicon-based technology not only signifies a technological revolution but also heralds profound changes in societal structures, economic systems, and even human thoughts. Encrypted silicon-based culture, as a crucial component of the silicon-based civilization, is one of the core forces driving this transformation. Games, as the vanguard of this culture, will lead us into a Renaissance of encrypted silicon-based culture. <br /><br />The impending Renaissance bears similarities and impacts akin to those of historical Renaissance periods. Just as the Renaissance of the 15th century marked a turning point for humanity from the Middle Ages to modern society, the Renaissance of encrypted silicon-based culture will signify humanity's fundamental shift from carbon-based civilization to silicon-based civilization. In this process, games will play a crucial role. They are not only showcases for technological innovation but also platforms for cultural exchange, social experiments, and previews of the future. The position of games in encrypted silicon-based culture can be likened to that of painting, sculpture, and literature during the Renaissance period. They are the vehicles of new age thoughts and aesthetics, the pioneers of exploring new worlds. <br /><br />In this process, blockchain technology and encrypted economy offer a novel way of organization and interaction, prompting fundamental changes in societal structures and value systems. Just as the humanistic spirit of the Renaissance reshaped the relationship between individuals and society, encrypted silicon-based culture is also reshaping the connection between individuals and the digital world. Games have become the vanguards of this cultural transformation, continuously exploring and practicing the balance between virtual and reality, individual freedom, and collective consensus. <br /><br />We stand at a new historical juncture where games are no longer just mere entertainment but bridges connecting the past and the future, the carbon-based and silicon-based civilizations. Just as the flourishing of arts and sciences during the Renaissance opened a new epoch for human thoughts and society, games in the era of encrypted silicon-based culture will lead us to a new age of silicon-based civilization that is more open, free, and innovative. <br /><br />BTC and Web3: Seeds of a New Civilization The emergence of Bitcoin (BTC) not only signifies a technological innovation but also represents a profound reflection on traditional financial systems and centralized power. It showcases a new way of value exchange to the world, heralding the reconstruction of trust and value systems. Following closely, the rise of Web3, centered around decentralization, redefines the relationships of ownership, creativity, and community, providing opportunities for network value and governance for every participant. <br /><br />InfiniteGames DAO: A New Era of Gaming in Encrypted Silicon-based Culture It is against this backdrop of history that InfiniteGames DAO is born. We not only inherit the spirits of BTC and Web3 but also endeavor to build an entirely new gaming ecosystem. Through the innovative technology and full-stack solutions of MerlinChain, InfiniteGames DAO aims to break the boundaries of the gaming industry and create a truly decentralized, freely accessible gaming world. <br /><br />In this world, games are no longer limited stories but infinite possibilities. Every participant is a creator, and every interaction is an exploration of the future. We build social graphs through blockchain technology, incentivize every contributor through the IGD sharing economy model. Our vision is to connect every independent individual through games, collectively creating a diverse, inclusive, innovative, and opportunistic new world. <br /><br />Co-creating the Future of the Gaming Industry As we stride toward a silicon-based civilization, games will play a more critical role than ever before. They will become a new form of education, training our minds, shaping our future. In this new world where virtuality intertwines with reality, games are not just a part of the virtual economy but also the cornerstone of building a new society. Through games, we can explore the unknown, define new social rules, and even shape new political systems. The establishment of InfiniteGames DAO not only signifies a new era for the gaming industry but also reflects a profound reflection on the role of games in the silicon-based civilization. We believe that with more creativity and passion joining us, InfiniteGames DAO will become a force driving the development of the gaming industry, creating a gaming world that belongs to everyone. <br /><br />At this historic moment, we invite all global gaming enthusiasts, Web3 explorers, developers, and dreamers to join us. Let us join hands and explore the future of humanity in the ocean of games, marching toward the brilliant future of the silicon-based civilization. InfiniteGames DAO is not just a project; it is a great adventure aimed at exploring the future of humanity through games. Let us witness and participate in this historic journey together.</div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="text-[12px] leading-[17px]">Share</div>
            <div className="space-x-[12px] flex items-center mt-[10px]">
              <img className="w-[30px] h-[30px] cursor-pointer" src={IconLinkX} />
              <img className="w-[30px] h-[30px] cursor-pointer" src={IconLinkFb} />
              <img className="w-[30px] h-[30px] cursor-pointer" src={IconLinkIns} />
              <img className="w-[30px] h-[30px] cursor-pointer" src={IconLinkLk} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}