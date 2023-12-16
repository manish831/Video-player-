/**
const axios = require("axios");

const options = {
  method: "GET",
  url: "https://youtube-v31.p.rapidapi.com/search",
  params: {
    relatedToVideoId: "7ghhRHRP6t4",
    part: "id,snippet",
    type: "video",
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "884b9a84c1msh3be28e18109dd69p18ac66jsnb41db518ce87",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  
  // console.log(response.data);
} catch (error) {
  console.error(error);
}
// let BASE_URL = "https://youtube-v31.p.rapidapi.com/search";
export const fetchFromApi = async (url) => {
  const response = await axios.request(options);
  // const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  // console.log(data);
  return response.data;
  // return data;
};

// import axios from "axios";
// // const axios = require("axios");
// const BASE_URL = "https://youtube-v31.p.rapidapi.com";
// const options = {
//   method: "GET",
//   params: {
//     maxResults: "50",
//   },
//   headers: {
//     "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
//     "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
//   },
// };
// // /baseurl/
// export const fetchFromApi = async (url) => {
//   const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//   return data;
// };
 */

const axios = require("axios");
const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: {
    // part: "snippet",
    // videoId: "M7FIvfx5J10",
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": "884b9a84c1msh3be28e18109dd69p18ac66jsnb41db518ce87",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
  // console.log(url);
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  // console.log(data)
  return data;
};


