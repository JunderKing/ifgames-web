import wandAbi from '@/config/abis/wandAbi.json'
import goldAbi from '@/config/abis/goldAbi.json'
import farmAbi from '@/config/abis/farmAbi.json'

const config = {
  wand: {
    abi: wandAbi,
    1337: '0x64632934a0c252E34691ee7cD412c6Fe410a33f3',
  },
  gold: {
    abi: goldAbi,
    1337: '0xC8c327544A0ec35Bf50cA7454f0395dF47435Ac1'
  },
  IFG: {
    abi: goldAbi,
    1337: '0xC8c327544A0ec35Bf50cA7454f0395dF47435Ac1'
  },
  farm: {
    abi: farmAbi,
    1337: '0xE2A6C61a2D3dD1b4daD746be884D6F5aA869908C'
  }
}

export function getContractConfig(name, chainId) {
  const contractConf = config[name]
  if (!contractConf) {
    throw new Error("Wrong contract name: " + name)
  }
  const abi = contractConf.abi
  const address = contractConf[chainId]
  if (!address) {
    throw new Error("Unsupported chain: " + chainId)
  }
  return { abi, address }
}