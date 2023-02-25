import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'
import { getTrack } from '../helpers/getTrack'

export const useTrack = (id) => {

    const [track, setTrack] = useState({})

    const { token } = useContext(Context)

    const getTrackById = async () => {
        const newTrack = await getTrack(id, token);
        setTrack(newTrack);
    }

    useEffect(() => {
        getTrackById();

    }, [])

    return track;
}
