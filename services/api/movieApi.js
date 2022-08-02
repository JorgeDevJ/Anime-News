import axios from "axios";

export const movieApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params:{
    api_key: "a22ee7587476f7e073929400dfcd13f2"
  }
});
export const getMovieEmbed = axios.create({
  baseURL: 'https://2embed.org/embed'
})
