
export const getToken = async (code) => {

  const res = await fetch('http://localhost:3000/token', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ code })
  });

  const { access_token, refresh_token, expires_in } = await res.json();

  return {
    access_token,
    refresh_token,
    expires_in
  }
}
