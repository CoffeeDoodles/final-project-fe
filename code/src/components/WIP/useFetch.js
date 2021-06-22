import React, { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // cleanup function for moving between pages
    const abortCont = new AbortController();
    fetch (url, { signal: abortCont.signal })
      .then(res => {
        if(!res.ok) {
          throw Error ('Could not find the data for that resource...');
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          setIsPending(false);
          setError(err.message);
        }
      })
    // aborts whatever fetch it's associating with
    return () => abortCont.abort();
  }, [url])
  return { data, isPending, error }
};

export default useFetch;