import { useState, useEffect, useContext } from "react";

import { CardContainer } from "../components/CardContainer";
import { Recommendation } from "./Recommendation";
import { getToken } from "../../auth/helpers/getToken";
import { getUserTop } from "../helpers/getUserTop";
import { Context } from "../context/Context";
import './MainPage.css'

export const MainPage = ({ code }) => {

  const [tracks, setTracks] = useState([]);

  const { token } = useContext(Context);

  const getUserTopTracks = async () => {
    if (!token) return;
    const topTracks = await getUserTop('tracks', token, 'short_term', 6);
    const { items } = topTracks;
    setTracks(items);
  }

  useEffect(() => {
    getUserTopTracks();
  }, [token])

  return (
    <main className="main-page">
      <CardContainer tracks={tracks} />
    </main >
  )
}
