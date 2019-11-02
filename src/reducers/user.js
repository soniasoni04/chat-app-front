import { USER_LOGIN } from "../actions"

export default function user (state =[], action={}) {
    console.log("reducer : ", state, "action: ", action.type, "data : ", action.payload)
    switch(action.type){
        case USER_LOGIN:
            return action.payload

        default:
            return state
    }

}