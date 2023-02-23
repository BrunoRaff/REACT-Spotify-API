import { AuthPage } from './auth/pages/AuthPage.jsx'
import { Header } from './common/Header.jsx';
import { Footer } from './common/Footer.jsx';
import { MainPage } from './main/pages/MainPage.jsx';


const code = new URLSearchParams(document.location.search).get('code');

export const App = () => {

  return (
    <body>
      <Header></Header>
      {code ? <MainPage code={code} /> : <AuthPage />}
      <Footer></Footer>
    </body>
  )
}


