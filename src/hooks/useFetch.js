import React, { useRef, useEffect, useState } from 'react'
let cache = {};
const useFetch = (url) => {
    // const cache = useRef({});
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!url) return;
        const fetchData = async () => {
            setStatus('fetching');
            if (cache[url]) {
                const data = cache[url];
                setData(data);
                setStatus('fetched');
            } else {
                try {
                    const response = await fetch(url);
                    const data = await response.json();
                    cache[url] = data; // set response in cache;
                    setData(data);
                    setStatus('fetched');
                } catch (error) {
                    setData(error.message);
                    setStatus('error');
                }
            }
        };

        fetchData();
    }, [url]);

    return [status, data];
};

export default useFetch;
