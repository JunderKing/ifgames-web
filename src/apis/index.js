import request from './request'

export default {
  userLogin: params => request.post('/api/user/login', params),
  userInviteCode: params => request.post('/api/user/inviteCode', params),
  goldBalance: params => request.post('/api/gold/balance', params),
  goldClaim: params => request.post('/api/gold/claim', params),
  goldFaucet: params => request.post('/api/gold/faucet', params),
  wandMint: params => request.post('/api/wand/mint', params),
  wandList: params => request.post('/api/wand/list', params),
  gameDetail: params => request.post('/api/game/detail', params),
  homeMain: params => request.post('/api/game/homeMain', params),
  homeWeb3: params => request.post('/api/game/homeWeb3', params),
}