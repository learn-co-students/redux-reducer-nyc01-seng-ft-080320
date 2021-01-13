export function manageFriends(state, action){
    let defaultState = state || { friends: [] }
    switch (action.type) {
        case 'ADD_FRIEND':
            return { friends: [...defaultState.friends, action.friend] }
        case 'REMOVE_FRIEND':
            let newFriendsArray = [...defaultState.friends]
            let indexToRemove = defaultState.friends.findIndex( friend => friend.id === action.id)
            newFriendsArray.splice(indexToRemove, 1)
            return { friends: newFriendsArray}
        default:
            return defaultState
    }
}
