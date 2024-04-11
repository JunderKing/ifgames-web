import {tokenConf} from './token.config.js'

const poolConfList = [{
  id: 0,
  poolSymbol: 'IFG',
  baseToken: 'IFG',
  quoteToken: 'IFG',
  stakeToken: 'IFG',
  earnToken: 'IFG',
  dexName: 'Uniswap',
  isSingle: true,
  needShow: true,
// }, {
//   id: 1,
//   poolSymbol: 'IFG-USDT',
//   baseToken: 'IFG',
//   quoteToken: 'USDT',
//   stakeToken: 'IFG-USDT LP',
//   earnToken: 'IFG',
//   dexName: 'Uniswap',
//   isSingle: false,
//   needShow: true,
}]

export function getPoolList() {
  return poolConfList.map(item => {
    item.baseIcon = tokenConf[item.baseToken]?.icon
    item.quoteIcon = tokenConf[item.quoteToken]?.icon
    return item
  })
}

export function getPoolConf(poolId) {
  const poolConf = poolConfList.find(item => item.id === poolId)
  if (!poolConf) {
    throw new Error("Pool not found: " + poolId)
  }
  poolConf.baseIcon = tokenConf[poolConf.baseToken]?.icon
  poolConf.quoteIcon = tokenConf[poolConf.quoteToken]?.icon
  return poolConf
}