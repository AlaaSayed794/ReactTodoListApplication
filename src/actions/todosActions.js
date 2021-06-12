import { ADDTODO, EDITTODO, DELTODO, GETTODOS, GETTODOSBYLIST } from './types'

export const addTodo = (description, listId) => dispatch => {
    fetch("todos", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ description, listId })
    }).then(res => res.json()).then(jsonRes => {
        dispatch(
            {
                type: ADDTODO,
                payload: { newTodo: jsonRes, listId }
            }
        )
    })
}

export const delTodo = (id) => dispatch => {
    fetch("todos/" + id, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then(res => res.json()).then(jsonRes => {
        dispatch(
            {
                type: DELTODO,
                payload: id
            }
        )
    })
}

export const editTodo = (todo) => dispatch => {
    fetch("todos/" + todo.id, {
        method: "PATCH",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ completed: !todo.completed })
    }).then(res => res.json()).then(jsonRes => {
        dispatch(
            {
                type: EDITTODO,
                payload: todo.id

            }
        )
    })
}


export const getTodos = () => dispatch => {
    fetch("todos").then(res => res.json()).then(jsonResponse => dispatch({
        type: GETTODOS,
        payload: jsonResponse
    }))
}

export const getTodosByList = (listId) => dispatch => {
    fetch("todos/" + listId).then(res => res.json()).then(jsonResponse => dispatch({
        type: GETTODOSBYLIST,
        payload: { ...jsonResponse, listId }
    }))
}

