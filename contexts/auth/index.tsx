import { createContext, useState } from 'react';

export const authContext = createContext({
    authenticated: false,
    setAuthenticated: (auth: boolean) => { }
})

const AuthContextProvider = (props: any) => {
    const [authenticated, setAuthenticated] = useState(props.cookie)

    const AuthProvider = authContext.Provider

    return (
        <AuthProvider value={{ authenticated, setAuthenticated }}>
            {props.children}
        </AuthProvider>
    )
}

export default AuthContextProvider