import { useState, useEffect } from "react";
import { movieApi } from "../services/api/movieApi";
import { useRouter } from "next/router";
export const useGeneralData = (url, id) => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const { query } = useRouter();

  const getData = async () => {
    try {
      setLoader(true);
      const { data } = await movieApi.get(url, {
        params: {
          page: 1,
        },
      });
      const response = data.results;
      setLoader(false);
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };
  const RecommendationMovie = async () => {
    try {
      setLoader(true);
      const { data } = await movieApi.get(url, {
        params: {
          page: 1,
        },
      });
      const response = data.results;
      setLoader(false);
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };
  const PersonData = async () => {
    try {
      setLoader(true);
      const { data } = await movieApi.get(url);
      const response = data.results;
      setLoader(false);
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    RecommendationMovie()
    PersonData()
  }, [id]);
  return[data, loader]
};
