import { BTN_ACTIONS } from "../Component/Calculator/btnConfig";

export const addBtn = (data) => {
    return {
        type: BTN_ACTIONS.ADD,
        data:data
    }
}
export const clearBtn = () => {
    return {
        type: BTN_ACTIONS.DELETE
    }
}
export const calculte = (data)=> {
    return {
        type: BTN_ACTIONS.CALC,
        data:data
    }
}