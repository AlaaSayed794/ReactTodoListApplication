import React from 'react'
import { Button, Table } from "react-bootstrap"

export default function Todos(props) {
    return (
        <div>
            <h1>Todos</h1>
            <Table>
                <thead>
                    <tr>
                        <th>Completed</th>
                        <th>Description</th>
                        <th>-</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.todos.map(todo =>
                            <tr key={todo.id}>
                                <td><input onChange={() => props.editTodo(todo)} type="checkbox" checked={todo.completed} /></td>
                                <td>{todo.description}</td>
                                <td><Button variant="danger" onClick={() => props.delTodo(todo.id)}>x</Button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}


