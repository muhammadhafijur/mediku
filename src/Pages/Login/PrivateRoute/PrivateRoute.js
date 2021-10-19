import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user, isLoading} = useAuth();
    if(isLoading){
        return <div class="mx-auto md:animate-spin w-12 h-12 border-8 border-t-2 border-gray-600 rounded-full loader"></div>
    }
    return (
        <Route
        {...rest}
        render={({location}) => user.email ? children : <Redirect
        to={{
            pathname: "/login",
            state: { from: location }
          }}
        ></Redirect>
        }
        >
            
        </Route>
    );
};

export default PrivateRoute;