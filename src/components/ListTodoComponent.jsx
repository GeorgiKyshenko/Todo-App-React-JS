function ListTodoComponent() {
    //returns today`s date
    const today = new Date()
    const targetDate = new Date(today.getFullYear() + 10, today.getMonth(), today.getDay())


    const todos = [
        {id: 1, description: "Learn React", done: false, targetDate: targetDate},
        {id: 2, description: "Learn Java", done: false, targetDate: targetDate},
        {id: 3, description: "Learn AWS", done: false, targetDate: targetDate}
    ]

    function deleteTodo(id) {

    }

    return (
        <div>
            {/*class names come from bootstrap*/}
            <div className={"container"}>
                <h1>Things You Want To Do!</h1>
                <div>
                    <table className={"table"}>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                            <th>Is Done?</th>
                            <th>Target Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            // tr must have key for React to work properly
                            todos.map(todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toDateString()}</td>
                                        <td>
                                            <button className={"btn btn-warning"}
                                                    onClick={() => deleteTodo(todo.id)}>Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            )
                        }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default ListTodoComponent