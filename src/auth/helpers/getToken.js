import { useState } from "react";

export const getToken = (code) => {
        let Token = '';
        const rawResponse = fetch('http://localhost:3000/token', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({code})
        }).then(loqchuchasea => loqchuchasea.json()).then(x => Token = x.access_token );
        return Token
}
