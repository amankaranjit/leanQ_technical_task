import React from 'react';
import { Navigate } from 'react-router-dom';

export const requireAuth = (isAuthenticated: boolean, loginPath: string) => {
    return (Component: React.ComponentType<any>) => {
        return isAuthenticated ? <Component /> : <Navigate to={loginPath} />;
    };
};
