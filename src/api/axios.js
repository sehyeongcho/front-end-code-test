/**
 * The Movie Database API 서버에 요청을 보낼 때, URL 중 중복되는 부분을 계속해서 입력하지 않아도 되게끔 Axios 인스턴스를 생성하는 파일입니다.
 */

import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: "en-US"
  }
})

export default axiosInstance