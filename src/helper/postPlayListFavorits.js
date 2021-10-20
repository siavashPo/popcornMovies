export default async function postPlayListFavorits(type, idMovie, bool) {
        const sessionId = localStorage.getItem('session_id')
        const {id} = localStorage.getItem('user')
        await (await fetch(`https://api.themoviedb.org/3/account/${id}/favorite?api_key=6fbe12673424b0186041f9a7aabfd814&session_id=${sessionId}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "media_type": `${type}`,
                "media_id": idMovie,
                "favorite": bool
            })
        }))
}