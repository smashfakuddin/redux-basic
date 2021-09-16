const initialstate = 0;

const changeNumber = (state = initialstate, action) => {
    switch (action.type) {
        case "INCREMENT": return state + 1;
        case "DECREMENT": {
            if (state > 0) {
                return state - 1;
            }
            else return state;
        };
        default: return state;
    }
}
export default changeNumber;