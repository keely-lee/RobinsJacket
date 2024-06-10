const RAPID_API_KEY = 'RAPID_API_KEY';
const RAPID_API_HOST = 'RAPID_API_HOST';
const rapid_base_url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com'

export const receiveStocks = (sym) => {
  let tickers = sym || "AAL, AAPL, ACB, AMC, AMD, AMZN, APHA, BA, BABA, BAC, BP, BRK.B, BYND, CCL, CGC, CPE, CPRX, CRBP, CRON, DAL, DIS, DKNG, ERI, ET, F, FB, FIT, GE, GILD, GM, GNUS, GOOGL, GRPN, HAL, HEXO, HTZ, INO, IVR, JBLU, JPM, KO, KOS, LK, LUV, LYFT, M, MFA, MGM, MRNA, MRO, MSFT, NCLH, NFLX, NIO, NKE, NKLA, NOK, NRZ, NTDOY, NVDA, NYMT, OAS, OGI, OXY, PENN, PFE, PLAY, PLUG, RCL, SAVE, SBUX, SIRI, SNAP, SNE, SPCE, SPHD, SPY, SQ, SRNE, T, TCEHY, TLRY, TSLA, TWTR, TXMD, UAL, UBER, UCO, USO, V, VKTX, VOO, VSLR, WFC, WMT, WORK, XOM, ZM, ZNGA"
  
  return $.ajax({
    method: "GET",
    url: `${rapid_base_url}/market/v2/get-quotes?symbols=${tickers}&region=US`,
    headers: {
      'X-RapidAPI-Key': process.env[RAPID_API_KEY],
      'X-RapidAPI-Host': process.env[RAPID_API_HOST],
    }
  }) 
};

export const receiveStock = (ticker, interval='1d', range='1mo') => {
  return $.ajax({
    method: "GET",
    url: `${rapid_base_url}/stock/v3/get-chart`,
    data: {
      symbol: ticker,
      interval,
      range,
      region: 'US',
      includePrePost: 'false',
      useYfid: 'true',
      includeAdjustedClose: 'true',
      events: 'capitalGain,div,split'
    },
    headers: {
      'X-RapidAPI-Key': process.env[RAPID_API_KEY],
      'X-RapidAPI-Host': process.env[RAPID_API_HOST],
    }
  })
};

export const getTicker = id => {
  return $.ajax({
    method: "GET",
    url: `/api/stocks/${id}`
  })
}

export const getNewTicker = stock => {
  return $.ajax({
    method: "POST",
    url: `/api/stocks`,
    data: { stock }
  })
}

