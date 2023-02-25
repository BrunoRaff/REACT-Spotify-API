
export const getTrack = async (id, token) => {

    const res = await fetch(`https://api.spotify.com/v1/tracks/${id}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })

    const track = await res.json();
    return track;
}
