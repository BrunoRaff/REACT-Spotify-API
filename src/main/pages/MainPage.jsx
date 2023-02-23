import { useState } from "react";
import { useEffect } from "react";
import { getToken } from "../../auth/helpers/getToken";
import { getUser } from "../helpers/getUser";



export const MainPage = ({ code }) => {

  const [user, setUser] = useState([]);


  async function userRa(){
   const token = await getToken(code);
   console.log(token);
   const userGa = await getUser(token.access_token);
   setUser(userGa);
  }

  useEffect(() => {
    
    userRa();
    
  }, [])
  

  return (
    <main>
      <p>{user.display_name}</p>
    </main>
  )
}
