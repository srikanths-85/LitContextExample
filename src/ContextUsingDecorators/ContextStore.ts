import { createContext } from '@lit/context';

export interface AppContextType {
    user: {
        name: string;
        age: number;
    };
    list: {
        items: string[];
    };
    auth: {
        isLoggedIn: boolean;
        loginwithdata: (data: string) => void;
        logout: () => void;
        login: () => void;
    };
}

export const appContext = createContext<AppContextType>('app-context');