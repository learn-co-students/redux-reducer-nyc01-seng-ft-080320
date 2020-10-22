export function manageFriends(state = {friends: []}, action){
    switch(action.type) {
        case "ADD_FRIEND":
        return (
            {
                ...state,
                friends: [
                    ...state.friends,
                    action.friend
                ]
            }
        )
        case "REMOVE_FRIEND":
            let foundIndex = state.friends.find(friend => friend.id === action.id)
            return (
                {
                    ...state,
                    friends: [
                        ...state.friends.slice(0, foundIndex),
                        ...state.friends.slice(foundIndex + 1)
                    ]
                }
            )
            default:
                return state;
    }
}
