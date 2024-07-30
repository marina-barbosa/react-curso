

import { useState } from 'react';

export const useFetchPost = (url) => {
  const [data, setData] = useState(null);

  const postData = async (body) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const json = await response.json();
      setData(json);

    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };

  return { data, postData };
};

