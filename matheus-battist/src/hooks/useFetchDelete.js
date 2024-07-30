import { useState } from 'react';

export const useFetchDelete = (url) => {
  const [loading, setLoading] = useState(false);
  const [msgError, setMsgError] = useState(null);

  const deleteData = async (id) => {
    setLoading(true);
    setMsgError(null);

    try {
      await fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('console.error: useFetchDelete - ', error.message);
      setMsgError('Algo deu errado, tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  return { deleteData, loading, msgError };
};

