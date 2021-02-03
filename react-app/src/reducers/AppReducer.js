export const AppReducer = (state, action) => {
    switch(action.type) {
        case "PAGE_LOADING_START":
            return {
                ...state,
              pageLoading: true
            };
        case "PAGE_LOADING_COMPLETE":
            return {
              pageLoading: false
            };
        case "SET_MESSAGE":
            return {
                ...state,
                message: {
                    text: action.payload.text,
                    type: action.payload.type,
                    status: action.payload.status ? action.payload.status : 'display'
                }
            };
        case "REMOVE_MESSAGE":
                const newState = {...state};
                delete newState.message;

                return newState;
        default:
            return state;
    }
}