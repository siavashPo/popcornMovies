export default async function login() {
    const {request_token} = await (await fetch('https://api.themoviedb.org/3/authentication/token/new?api_key=6fbe12673424b0186041f9a7aabfd814')).json()
    window.location = `https://www.themoviedb.org/authenticate/${request_token}?redirect_to=https://popcornmovies.vercel.app/`
}