
export const getToken = async(code) => {
        const rawResponse = await fetch('http://localhost:3000/token', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({code})
        });
        const content = await rawResponse.json();
      
        console.log(content);
}
