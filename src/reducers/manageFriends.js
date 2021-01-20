export function manageFriends(state={friends: []}, action){

    switch (action.type) {
        case 'ADD_FRIEND':
            return {...state, friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
            let bestFriends = state.friends.filter(f => f.id != action.id)
            return {...state, friends: bestFriends}
        default:
            return state
    }

}
