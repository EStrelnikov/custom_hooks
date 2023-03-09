import axios from "axios";
import React, { useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function refetch(params = { params: { _limit: 10 } }) {
    try {
      await axios.get(url, params).then((res) => {
        setData(res.data);
        setIsLoading(false);
      });
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }

  return {
    data,
    isLoading,
    error,
    refetch,
  };
}
