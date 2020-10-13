function testStore(state = { test: null }, action) {
    switch (action.type) {
        case "SET_TEST":
            return {
                ...state,
                test: action.test
            };
        case "GET_TEST":
            return state.test;
        default:
            return state;
    }
}

export default testStore;
