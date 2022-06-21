import { useState, useEffect } from "react";
import { movieApi } from "../services/api/movieApi";
import { useRouter } from "next/router";
export const useGetExactTV = () => {
  /*get tv data */
  const [tv, setTv] = useState([]);
  const [cast, setCast] = useState([]);
  const { query } = useRouter();
  const getTvData = async () => {
    try {
      const { data } = await movieApi.get(`/tv/${query.tv_id}`);
      const result = data;
      setTv(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  const getCreditsDta = async () => {
    try {
      const { data } = await movieApi.get(`/tv/${query.tv_id}/credits`);
      const result = data.cast;
      setCast(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTvData();
    getCreditsDta();
  }, [query.tv_id]);
  return [tv, cast];
  /*get tv data */
};
