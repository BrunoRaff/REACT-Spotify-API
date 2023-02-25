import { AuthPage } from './auth/pages/AuthPage.jsx'
import { Header } from './common/Header.jsx';
import { Footer } from './common/Footer.jsx';
import { MainPage } from './main/pages/MainPage.jsx';
import { Routes, Route, Navigate } from "react-router-dom"
import { Recommendation } from './main/pages/Recommendation.jsx';
import { Provider } from './main/context/Provider.jsx';


const code = new URLSearchParams(document.location.search).get('code');

export const App = () => {

  return (
    <div className='main-body'>
      <Provider code={code}>
        <Header />
        <Routes>
          {
            code
              ? <Route path='/' element={<MainPage code={code} />} />
              : <Route path='auth' element={<AuthPage />} />
          }
          <Route path="/*" element={<Navigate to="/auth" />} />
          <Route path="recommendation/:id" element={<Recommendation />} />
        </Routes>
        <Footer />
      </Provider>
    </div>
  )
}


