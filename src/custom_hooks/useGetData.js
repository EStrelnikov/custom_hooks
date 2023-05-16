import { useEffect, useState } from "react";
import axios from "axios";

export function useGetData(url, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    axios({
      method: "GET",
      url,
      params: {
        page: pageNumber,
      },
    })
      .then((res) => {
        setData((prevState) => {
          return [...prevState, ...res.data?.results];
        });
        setHasMore(res.data.info.count > data.length);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, [pageNumber]);
  return { loading, error, data, hasMore };
}
