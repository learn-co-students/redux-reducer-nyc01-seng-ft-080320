export function manageFriends(state = {friends: []}, action){
    switch(action.type){
        case "ADD_FRIEND":
            return {friends: [...state.friends, action.friend]};
        case "REMOVE_FRIEND":
            const oldState = [...state.friends]
            const filteredFriends = oldState.filter(friend => friend.id !== action.id)
            return {friends: filteredFriends}
        default:
            return state
    }
}
