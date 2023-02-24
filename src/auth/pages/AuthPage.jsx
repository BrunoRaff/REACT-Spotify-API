
import './CSS/authPage.css'

export const AuthPage = () => {
  return (
      <main className='main-AuthPage'>
        <a className='button' href="https://accounts.spotify.com/authorize?client_id=873def3a607b4e5f9150af8bad6fe385&response_type=code&redirect_uri=http://127.0.0.1:5173/&scope=streaming%20user-read-email%20user-read-playback-state%20user-modify-playback-state%20user-top-read%20user-library-read">Login</a>
      </main>
  )

}
