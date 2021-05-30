import React from 'react'
import { Button, Table } from "react-bootstrap"

export default function Lists(props) {
    return (
        <div>
            <h1>Lists</h1>
            <Button onClick={() => props.getTodos()}>All todos</Button>
            <hr></hr>
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
                        props.lists.map(list =>
                            <tr key={list.id}>
                                <td><input onChange={() => props.editList(list)} type="checkbox" checked={list.completed} /></td>
                                <td><Button variant="light" onClick={() => props.getTodosByList(list.id)}>{list.description}</Button></td>
                                <td><Button variant="danger" onClick={() => props.delList(list.id)}>x</Button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}