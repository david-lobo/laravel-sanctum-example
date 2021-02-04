export const AppReducer = (state, action) => {
    switch(action.type) {
        case "PAGE_LOADING_START":
            return {
                ...state,
              pageLoading: true
            };
        case "PAGE_LOADING_STOP":
            return {
              pageLoading: false
            };
        default:
            return state;
    }
}