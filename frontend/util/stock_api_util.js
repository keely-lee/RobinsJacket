export const receiveStocks = (sym) => {
  let tickers = sym || "AAL, AAPL, ACB, AMC, AMD, AMZN, APHA, BA, BABA, BAC, BP, BRK.B, BYND, CCL, CGC, CPE, CPRX, CRBP, CRON, DAL, DIS, DKNG, ERI, ET, F, FB, FIT, GE, GILD, GM, GNUS, GOOGL, GRPN, HAL, HEXO, HTZ, INO, IVR, JBLU, JPM, KO, KOS, LK, LUV, LYFT, M, MFA, MGM, MRNA, MRO, MSFT, NCLH, NFLX, NIO, NKE, NKLA, NOK, NRZ, NTDOY, NVDA, NYMT, OAS, OGI, OXY, PENN, PFE, PLAY, PLUG, RCL, SAVE, SBUX, SIRI, SNAP, SNE, SPCE, SPHD, SPY, SQ, SRNE, T, TCEHY, TLRY, TSLA, TWTR, TXMD, UAL, UBER, UCO, USO, V, VKTX, VOO, VSLR, WFC, WMT, WORK, XOM, ZM, ZNGA"
  
  return $.ajax({
    method: "GET",
    url: `https://sandbox.iexapis.com/stable/stock/market/batch?symbols=${tickers}&types=quote&token=Tpk_5c8501bd14b844bd9703a6f94e1ba08d`
  }) 
};  //USING SANDBOX TOKEN & SANDBOX BASE URL!!!

export const receiveStock = ticker => {
  return $.ajax({
    method: "GET",
    url: `https://sandbox.iexapis.com/stable/stock/${ticker}/batch?types=quote,chart&range=1m&token=Tpk_5c8501bd14b844bd9703a6f94e1ba08d`,
  })
};

