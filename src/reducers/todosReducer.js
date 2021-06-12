import { GETALL, ADDTODO, EDITTODO, EDITLIST, DELTODO, DELLIST, GETTODOS, GETTODOSBYLIST } from '../actions/types'

const initialState = {
    todos: [],
    currentList: 0
}
export default function (state = initialState, action) {
    console.log("todos Reducer called")

    switch (action.type) {

        case GETALL:
        case GETTODOS:
            return ({
                todos: action.payload.todos
            })
        case GETTODOSBYLIST:
            return ({
                todos: action.payload.todos,
                currentList: action.payload.listId
            })
        case ADDTODO:
            if (!state.currentList || state.currentList == action.payload.listId) {
                return ({
                    todos: [...state.todos, action.payload.newTodo]
                })
            }
            else return state

        case DELTODO:
            return ({
                todos: [...state.todos.filter(todo => todo.id !== action.payload)]
            })
        case DELLIST:
            return ({
                todos: [...state.todos.filter(todo => todo.listId !== action.payload)]
            })
        case EDITTODO:
            return ({
                todos: state.todos.map(Todo => {
                    if (Todo.id === action.payload) {
                        Todo.completed = !Todo.completed
                    }
                    return Todo
                })
            })
        case EDITLIST:
            return ({
                todos: state.todos.map(Todo => {
                    if (Todo.listId === action.payload) {
                        Todo.completed = !Todo.completed
                    }
                    return Todo
                })
            })
        default:
            console.log("todos Reducer called")

            return state

    }
}
