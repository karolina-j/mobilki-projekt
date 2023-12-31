import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import firebase from "firebase/compat/app";
import { auth } from "../firebaseSetup";

interface AuthProviderProps {
    children: ReactNode | ReactNode[];
}

export const AuthProvider = (props: AuthProviderProps) => {
    const { children } = props;

    const [user, setUser] = useState<firebase.User | null>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
            setUser(firebaseUser);
        });

        return unsubscribe;
    }, []);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
