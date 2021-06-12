
import { GETALL } from './types'

export const getAll = () => dispatch => {
    fetch("http://localhost:5000/").then(res => res.json()).then((jsonResponse) => dispatch({
        type: GETALL,
        payload: jsonResponse
    }))
}

