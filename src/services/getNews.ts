import axios, {AxiosResponse, AxiosRequestConfig} from "axios";

const getNews = (): Promise<AxiosResponse> => {
  
    const options: AxiosRequestConfig = {
        method: 'GET',
        url: 'https://free-news.p.rapidapi.com/v1/search',
        params: {q: 'Elon Musk', lang: 'en'},
        headers: {
          'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
          'X-RapidAPI-Key': '565713877dmshfe9dfe851f5f5b8p1affb7jsn2ac801fa4f3e'
        }
      };
      
    return axios.request(options)
}

export default getNews;