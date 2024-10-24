import * as React from 'react';
import {
  AuthenticationContext,
  SessionContext,
  type Session,
} from '@toolpad/core/AppProvider';
import { Account } from '@toolpad/core/Account';



const demoSession = {
    user: {
      name: 'Bharat Kashyap',
      email: 'bharatkashyap@outlook.com',
      image: 'https://avatars.githubusercontent.com/u/19550456',
    },
  };

const Profile1 = () => {
  const [session, setSession] = React.useState<Session | null>(null);
  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession(demoSession);
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  return (
    <AuthenticationContext.Provider value={authentication}>
      <SessionContext.Provider value={session}>
        <Account   />
      </SessionContext.Provider>
    </AuthenticationContext.Provider>
  );

}

export default Profile1