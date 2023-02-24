import { useState, useEffect } from "react";

import { CardContainer } from "../components/CardContainer";
import { Recommendation } from "./Recommendation";
import { getToken } from "../../auth/helpers/getToken";
import { getUserTop } from "../helpers/getUserTop";
import './MainPage.css'

export const MainPage = ({ code }) => {

  const [token, setToken] = useState('');
  const [tracks, setTracks] = useState([]);

  const getAccessData = async () => {
    const { access_token } = await getToken(code);
    setToken(access_token);
  }

  const getUserTopTracks = async () => {
    if (!token) return;
    const topTracks = await getUserTop('tracks', token, 'short_term', 6);
    const { items } = topTracks;
    setTracks(items);
  }

  useEffect(() => {
    getAccessData();
  }, [])

  useEffect(() => {
    getUserTopTracks();
  }, [token])
  return (
    <main>
      <CardContainer tracks={tracks} />
      <Recommendation></Recommendation>
    </main >
  )
}
