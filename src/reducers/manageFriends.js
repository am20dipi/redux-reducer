export function manageFriends(state, action){
    state = {
        friends: []
    }

    action = {
        type: "ADD_FRIEND",
        friend: {
            name: "Chrome Boi",
            hometown: "NYC",
            id: 1
        }
    }

    action = {
        type: "REMOVE_FRIEND",
        id: 1
      }

    switch(action.type){
        case "ADD_FRIEND":
            return {friends: state.friends + action.friend}
        case "REMOVE_FRIEND":
            return {friends: state.friends - action.friend}
        default:
            return state
    }
}
