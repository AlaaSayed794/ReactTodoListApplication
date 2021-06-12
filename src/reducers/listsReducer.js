import { GETALL, ADDLIST, EDITLIST, EDITLISTDESC, DELLIST } from '../actions/types'


const initialState = {
    lists: []
}
export default function (state = initialState, action) {
    switch (action.type) {
        case GETALL:
            return ({
                lists: action.payload.todoslists
            })
        case ADDLIST:
            return ({
                lists: [...state.lists, action.payload]
            })
        case DELLIST:
            return ({
                lists: [...state.lists.filter(list => list.id !== action.payload)]
            })

        case EDITLIST:
            return ({
                lists: state.lists.map(List => {
                    if (List.id === action.payload) {
                        List.completed = !List.completed
                    }
                    return List
                })
            })
        case EDITLISTDESC:
            return ({
                lists: state.lists.map(List => {
                    if (List.id === action.payload.id) {
                        List.description = action.payload.description
                    }
                    return List
                }),
            })

        default:
            return state

    }
}