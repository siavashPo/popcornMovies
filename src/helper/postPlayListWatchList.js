export default function postPlayListWatchList(type, idMovie, bool) {
        const sessionId = localStorage.getItem('session_id')
        const {id} = localStorage.getItem('user')
        fetch(`https://api.themoviedb.org/3/account/${id}/watchlist?api_key=6fbe12673424b0186041f9a7aabfd814&session_id=${sessionId}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "media_type": `${type}`,
                "media_id": idMovie,
                "watchlist": bool
            })
        })
}