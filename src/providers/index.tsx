import { ReactNode } from 'react';

// providers
import { UserProvider } from './userContext';

type GlobalProvidersProps = {
  children: ReactNode;
};

function GlobalProvider({ children }: GlobalProvidersProps) {
  return <UserProvider>{children}</UserProvider>;
}

export { GlobalProvider };
