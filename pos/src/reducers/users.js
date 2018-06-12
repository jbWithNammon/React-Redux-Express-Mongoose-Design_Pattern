import { ADD_USER, SET_AUTH } from '../constants/actionTypes'

const initialState = [
    {
        text: 'Use Redux',
        completed: false,
        status: false
    }
]

export default function setUsers(state = initialState, action) {
    switch (action.type) {
        case ADD_USER:

            break;
        case SET_AUTH:

            break;

        default:
            return state;
    }
}