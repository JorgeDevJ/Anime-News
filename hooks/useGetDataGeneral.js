import { useState, useEffect } from "react";
import { movieApi } from "../services/api/movieApi";
export const useGeneralData = (url) => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

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
  useEffect(() => {
    getData();
  }, []);
  return[data, loader]
};
