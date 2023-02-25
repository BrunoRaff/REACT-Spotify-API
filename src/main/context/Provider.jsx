import { useEffect, useState } from "react";
import { getToken } from "../../auth/helpers/getToken";
import { Context } from "./Context"

export const Provider = ({ children, code }) => {

    const [token, setToken] = useState('');

    const getAccessData = async () => {
        const { access_token } = await getToken(code);
        setToken(access_token);
    }

    useEffect(() => {
        getAccessData();
    }, [])

    return (
        <Context.Provider value={{ token }}>
            {children}
        </Context.Provider>
    )
}
