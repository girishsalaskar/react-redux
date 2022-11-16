const initialState = {
    message: 'Hi there'
}

const reducer = (state = initialState, action) => {
    const newState = {...state};
    if(action.type === 'Message Change') {
        newState.message = 'Button clicked!'
    }

    return newState;
}

export default reducer;