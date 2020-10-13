function authStore(state = { token: null }, action) {
    switch (action.type) {
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            };
        case "GET_TOKEN":
            return state.token;
        default:
            return state;
    }
}

export default authStore;
