import { useEffect, useState } from "react";



export const useApiGet = (url) => {
  const [status, setStatus] = useState(0);
  const [statusText, setStatusText] = useState("");
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const getAPIData = async () => {
    setLoading(true);
    try {
      const apiResponse = await fetch(url);
      const json = await apiResponse.json();
      setStatus(apiResponse.status);
      setStatusText(apiResponse.statusText);
      setData(json);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    getAPIData();
  }, []);

  return { status, statusText, data, error, loading };
};
