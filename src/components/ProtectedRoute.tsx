// components/ProtectedRoute.tsx
import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import useAuth from '@/contexts/useAuth';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  if (!isLoggedIn) {
    // Redirect to the login page if the user is not logged in
    router.push('/login'); // Adjust the path to your login route
    return null; // Return null while redirecting
  }

  // Render children if the user is logged in
  return <>{children}</>;
};

export default ProtectedRoute;
