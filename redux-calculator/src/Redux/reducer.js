import { BTN_ACTIONS } from "../Component/Calculator/btnConfig"; 
const initialState = {
    expression:''
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case BTN_ACTIONS.ADD:
            return {
                ...state,expression:action.data
            }
        case BTN_ACTIONS.DELETE:
            return {
                ...state,expression:action.data
            }
        case BTN_ACTIONS.CALC:
            return {
                ...state,expression:action.data
            }
        default:
            return state;
    }
}
