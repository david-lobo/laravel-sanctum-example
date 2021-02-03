import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function withLogout(Component) {
    return function({ ...rest}) {
        const { logoutUser } = useContext(AuthContext);
        let history = useHistory();
        const logout = async () => {
            await logoutUser();
            history.push('/auth/login')
        }
        return (
            <Component logout={logout}/>
        );
    }
}

export default withLogout;
