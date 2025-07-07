import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [response, setResponse] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      setResponse(data);
    };
    fetchData();
  }, []);

  return response;
};

export default useFetch;
