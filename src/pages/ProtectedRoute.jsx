import React from 'react';
import {Navigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext";

function ProtectedRoute({children, requireAdmin}) {
  const {user} = useAuth();

  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to={'/'} replace />
  }

  return children;
}

export default ProtectedRoute;
