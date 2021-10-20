import {useEffect, useState} from "react";

export default function useMovieDB(endpoint, options) {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${endpoint}?api_key=6fbe12673424b0186041f9a7aabfd814&${new URLSearchParams(
                options?.query
            ).toString()}`
        )
            .then(r => r.json())
            .then(setData)
            .finally(() => {
            })
    }, [endpoint, options])
    return {data}
}