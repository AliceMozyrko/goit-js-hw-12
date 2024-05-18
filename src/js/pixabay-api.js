import axios from 'axios';

const API_KEY = "43811002-0821001961ff17859e55caea7"
const BASE_URL = "https://pixabay.com/"
axios.defaults.baseURL = BASE_URL

export const fetchPhotos = (query, imgPage = 1) => {
  const searchParams = {
    q: query,
    key: API_KEY,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    per_page: 15,
    page: imgPage,
  }

  return axios.get("api/", {
    params: {
      ...searchParams,
    },
  })
}