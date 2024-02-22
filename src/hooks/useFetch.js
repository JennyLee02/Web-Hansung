import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
      
            try {
                const res = await fetch(url);
                const json = await res.json();
                console.log(json);
                setData(json)
                setLoading(false)
            } catch(error){
                console.error("Fetch error:", error);
                setError(error)
                setLoading(false)
            }
        }
        fetchData()
    }, [url])

    return {loading, error, data}
}

export default useFetch
