import axios from "axios";

const Base_url = `https://youtube-v31.p.rapidapi.com`;

const options = {
  url: Base_url,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "03ee2c943amsh1105d8c1e5e5686p1f9425jsn77de68fe0ea8",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchfromApi = async (url) => {
  const { data } = await axios.get(`${Base_url}/${url}`, options);
  return data;
};
