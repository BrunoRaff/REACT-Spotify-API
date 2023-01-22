import { AuthPage } from './auth/pages/AuthPage.jsx'
import { MainPage } from './main/pages/MainPage.jsx';

const code = new URLSearchParams(document.location.search).get('code');

export const App = () => {

  return (
    <>
      {code ? <MainPage code={code} /> : <AuthPage />}
    </>
  )
}


