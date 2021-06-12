import { ADDLIST, EDITLIST, EDITLISTDESC, DELLIST } from './types'

export const addList = (description) => dispatch => {
    fetch("todoslists", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ description })
    }).then(res => res.json()).then(jsonRes => {

        dispatch({
            type: ADDLIST,
            payload: jsonRes
        })
    })
}

export const delList = (id) => dispatch => {
    fetch("todoslists/" + id, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then(res => res.json()).then(jsonRes => {
        dispatch(
            {
                type: DELLIST,
                payload: id
            }
        )
    })
}


export const editList = (list) => dispatch => {
    fetch("todoslists/" + list.id, {
        method: "PATCH",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ completed: !list.completed })
    }).then(res => res.json()).then(jsonRes => {
        dispatch(
            {

                type: EDITLIST,
                payload: list.id
            }
        )
    })
}

export const editListDesc = (id, description) => dispatch => {
    fetch("http://localhost:5000/todoslists/" + id, {
        method: "PATCH",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ description })
    }).then(res => res.json()).then(jsonRes => {
        dispatch(
            {
                type: EDITLISTDESC,
                payload: { id, description }
            }
        )
    })
}