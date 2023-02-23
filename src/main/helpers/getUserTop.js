

export const getUserTop = async (type, token, timeRange, limit) => {
    const res = await fetch(`https://api.spotify.com/v1/me/top/${type}?time_range=${timeRange}&limit=${limit}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })

    const top = await res.json();
    return top;
}
