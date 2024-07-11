import {
  RAPID_API_KEY,
  RAPID_API_HOST,
  rapid_base_url,
} from './util'

// Auto: 8 articles
export const receiveNews = (term, region="US") => {
  return $.ajax({
    method: "GET",
    url: `${rapid_base_url}/auto-complete`,
    data: {
      q: term,
      region
    },
    headers: {
      "X-RapidAPI-Key": process.env[RAPID_API_KEY],
      "X-RapidAPI-Host": process.env[RAPID_API_HOST],
    }
  })
}
