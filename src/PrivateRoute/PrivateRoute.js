import React from 'react';
import { Redirect, Route } from 'react-router';
import UseAuth from '../hooks/UseAuth';
import spinner from '../assets/Infinity-1s-200px.svg'

const PrivateRoute = ({ children, ...rest }) => {
    const { allContexts } = UseAuth();
    const { user, loading } = allContexts;

    if (loading) {
        return (
            <div className=" justify-content-center w-100 d-flex">
                <img src={spinner} alt="" />
            </div>
        )
    }

    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    user.displayName ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        </div>
    );
};

export default PrivateRoute;

