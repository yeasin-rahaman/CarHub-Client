import { Redirect, Route } from 'react-router';
import UseAuth from '../hooks/UseAuth';
import spinner from '../assets/Infinity-1s-200px.svg'


const AdminPrivateRoute = ({ children, ...rest }) => {

    const { allContexts } = UseAuth();
    const { isAdmin } = allContexts;
    if (!isAdmin) {
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
                    isAdmin ? (
                        children
                    ) : (

                        <Redirect
                            to={{
                                pathname: "/home",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        </div>
    );
};

export default AdminPrivateRoute;

