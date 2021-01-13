export function managePresents(state, action){
    let defaultState = state || { numberOfPresents: 0 }
    if (action.type === 'INCREASE') {
        return { numberOfPresents: defaultState.numberOfPresents + 1}
    } else {
        return defaultState
    }
}
