import React from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";

const TodoList = ({ todoList, handleDoneTask, handleDeleteTask }) => {
    const handleDone = (id) => {
        handleDoneTask(id);
    }
    return (
        <>
            <ListGroup>
                {todoList.map(todo => {
                    return (
                        <ListGroupItem id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} color={todo.complete ? "success" : ""} className="d-flex justify-content-between">
                            {todo.task}
                            <div>
                                <Button color="success" onClick={() => handleDone(todo.id)} >Done</Button>
                                <Button color="danger" onClick={() => handleDeleteTask("single", todo.id)} className="ml-3" >Delete</Button>
                            </div>
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
            <Button color="warning" className="my-3" block onClick={() => handleDeleteTask("complete")}>Delete Completed</Button>
            <Button color="danger" block onClick={() => handleDeleteTask("all")}>Delete All</Button>
        </>
    );
};

export default TodoList;