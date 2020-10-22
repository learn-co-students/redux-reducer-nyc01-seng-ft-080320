export function manageFriends(state = {friends: []}, action){
    switch(action.type){
        case "ADD_FRIEND":
            return (
                {...state, friends: [...state.friends, action.friend]
            }
            )
        case "REMOVE_FRIEND":
            const friendToRemove= state.friends.findIndex(element=> element.id === action.id)
            return (
                {...state, friends:[...state.friends.slice(0, friendToRemove), ...state.friends.slice(friendToRemove+1)]
                }
            )
        default:
            return state

    }


}
