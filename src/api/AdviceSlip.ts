import axios from "axios";

const BASE_URL = "https://api.adviceslip.com";

export interface PhraseProps {
  slip: {
    id: number,
    advice: string
  }
}

export default class AdviceSlip {
  static getPhrase() {
    return axios.get<PhraseProps>(`${BASE_URL}/advice`);
  }  
}
