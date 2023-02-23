
export const getUser = async (token) => {

  const rawResponse = await fetch('https://api.spotify.com/v1/me', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  });
  const content = await rawResponse.json();

  return content;
}
