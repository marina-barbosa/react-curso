import { useEffect, useState } from "react";

export const useFetchGet = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false); // estado de loading
  const [error, setError] = useState(null); // tratando erros

  const getData = async () => {
    setLoading(true); // ativa o loading

    // simular um atraso
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('console.error: useFetchGet - ', error.message);
      setError('Algo deu errado, verfique o JSON Server ou tente novamente mais tarde.');
    } finally {
      setLoading(false); // dstv o loading independente do resultado
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return {
    data,
    getData,
    loading,
    error
  };
};


