import {useState, useEffect} from "react";

export default function usePlayList(endpoint) {
    const [data, setData] = useState([])
    useEffect(() => {
        const sessionId = localStorage.getItem('session_id')
        const {id} = localStorage.getItem('user')
        fetch(`https://api.themoviedb.org/3/account/${id}/favorite/${endpoint}?api_key=6fbe12673424b0186041f9a7aabfd814&session_id=${sessionId}`)
            .then(r => r.json())
            .then(setData)
    }, [endpoint])
    return {data}
}