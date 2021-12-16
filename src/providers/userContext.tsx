import * as React from 'react';
import * as faker from 'faker';

type User = {
  id: string;
  name: string;
  email: string;
};

type UserContextValue = {
  user: User | null;
  loading: boolean;
  changeUser: () => Promise<void>;
};

type UserProviderProps = {
  children: React.ReactNode;
};

const UserContext = React.createContext({} as UserContextValue);

function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setUser({
      id: faker.datatype.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
    });
  }, []);

  function changeUser(): Promise<void> {
    setLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          setUser({
            id: faker.datatype.uuid(),
            name: faker.name.findName(),
            email: faker.internet.email(),
          })
        );
        setLoading(false);
      }, 2000);
    });
  }

  return (
    <UserContext.Provider value={{ user, loading, changeUser }}>
      {children}
    </UserContext.Provider>
  );
}

const useUser = () => {
  return React.useContext(UserContext);
};

export { UserProvider, useUser };
