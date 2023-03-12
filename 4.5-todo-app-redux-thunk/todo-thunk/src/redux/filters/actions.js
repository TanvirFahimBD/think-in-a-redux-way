import { COLORCHANGED, STATUSCHANGED } from "./actionTypes"

export const statusChanged = (status) => {
    return {
        type: STATUSCHANGED,
        payload: status
    }
}

export const colorChanged = (color, changeType) => {
    return {
        type: COLORCHANGED,
        payload: { color, changeType }
    }
}
