import axios from "axios";

const BASE_URL = "https://translate.googleapis.com";

export interface TranslateProps {
  translated: string;
  original: string;
  from: string;
  to: string;
}

export default class GoogleTranslate {
  static async translateText(
    text: string | any,
    options: { from: string; to: string }
  ) {
    const URLqueryParams = new URLSearchParams({
      sl: options.from,
      tl: options.to,
      q: text,
    });

    const response = await axios
      .get(
        `${BASE_URL}/translate_a/single?client=gtx&dt=t&${URLqueryParams.toString()}`
      )
      .then((r) => r.data);

    return {
      translated: response[0][0][0],
      original: response[0][0][1],
      from: response[2],
      to: options.to,
    };
  }
}
