import {createContext, useEffect, useState} from "react";

export const UserContext = createContext(null)

export default function UserProvider({children}) {
    const [user, setUser] = useState(null)
    function logout() {
        localStorage.clear()
        setUser(null)
    }

    async function getUserDetalis(sessionId) {
        localStorage.setItem('session_id', sessionId)
        const result = await (await fetch(`https://api.themoviedb.org/3/account?api_key=6fbe12673424b0186041f9a7aabfd814&session_id=${sessionId}`)).json();
        localStorage.setItem('user', JSON.stringify(result))
        setUser(result);
        window.history.pushState({}, '', '/');
    }

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        if (params?.approved) {
            fetch(`https://api.themoviedb.org/3/authentication/session/new?api_key=6fbe12673424b0186041f9a7aabfd814`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({request_token: params.request_token})
            }).then(res => res.json()).then(data => {
                getUserDetalis(data.session_id)
            })
        }
        const sessionId = localStorage.getItem('session_id')
        if (sessionId) {
            getUserDetalis(sessionId)
        }
    }, [])

    return <UserContext.Provider value={{user, logout}}>{children}</UserContext.Provider>
}