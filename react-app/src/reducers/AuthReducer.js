export const AuthReducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: {
                    email: action.payload.user.email,
                    name: action.payload.user.name
                },
                isLoggedIn: true
            };
        case 'LOGOUT':
            return {
                isLoggedIn: false
            };
        default:
            return state;
    }
}