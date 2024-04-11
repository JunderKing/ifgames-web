export default function HomeFooter() {
  const links = [
    { title: 'Build', children: [
      { label: 'Buid with Infinite Gamses DAO', action: () => {} },
      { label: 'Infrastucre', action: () => {} },
      { label: 'Game Builders Program', action: () => {} },
      { label: 'Open Source', action: () => {} },
      { label: 'Apply to Partner', action: () => {} },
    ] },
    { title: 'Play', children: [
      { label: 'Games', action: () => {} },
      { label: 'Platform', action: () => {} },
    ] },
    { title: 'About', children: [
      { label: 'About Infinite Games DAO', action: () => {} },
      { label: 'Team', action: () => {} },
      { label: 'Brand Assets', action: () => {} },
      { label: 'Newsletter', action: () => {} },
      { label: 'Documentation', action: () => {} },
      { label: 'Careers', action: () => {} },
      { label: 'Governance Forun', action: () => {} },
      { label: 'Snapshot', action: () => {} },
    ] },
  ]

  return (
    <div className="flex justify-between w-[948px] mx-auto pt-[60px] pb-[45px] bg-[#FFFDF7] px-[20px]">
      { links.map((item, index) => (
        <div className="" key={index}>
          <div className="mb-[20px] text-[16px] text-primary text-medium">{item.title}</div>
          {
            item.children.map((link, i) => (
              <div className="text-[14px] text-light text-[#444] leading-[30px] cursor-pointer" key={i}>{link.label}</div>
            ))
          }
        </div>
      )) }
    </div>
  )
}