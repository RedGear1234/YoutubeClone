import axios from "axios";

const Base_url = `https://youtube-v31.p.rapidapi.com`;

const options = {
  url: Base_url,
  params: {
    maxResults: "50",
  },
  headers: {
    'X-RapidAPI-Key': '35b1520c32mshaa483fcc0eb07a4p1e3ea8jsnf63be4a522d9',
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchfromApi = async (url) => {
  const { data } = await axios.get(`${Base_url}/${url}`, options);
  return data;
};
