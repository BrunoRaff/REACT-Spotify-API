import { useState, useEffect } from "react";

import { CardContainer } from "../components/CardContainer";
import { getToken } from "../../auth/helpers/getToken";
import { getUserTop } from "../helpers/getUserTop";
import './MainPage.css'

export const MainPage = ({ code }) => {

  const [token, setToken] = useState('');
  const [artists, setArtists] = useState([]);

  const getAccessData = async () => {
    const { access_token } = await getToken(code);
    setToken(access_token);
  }

  const getUserTopArtists = async () => {
    if (!token) return;
    const topArtists = await getUserTop('artists', token, 'short_term', 6);
    const { items } = topArtists;
    setArtists(items);
  }

  useEffect(() => {
    getAccessData();
  }, [])

  useEffect(() => {
    getUserTopArtists();
  }, [token])
  return (
    <main>
      <CardContainer artists={artists} />
    </main >
  )
}
