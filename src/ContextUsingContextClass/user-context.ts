import { createContext } from '@lit/context';

export interface User {
  name: string;
  role: string;
}

export const userContext = createContext<User>('user-context');