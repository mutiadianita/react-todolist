import React, { useState } from "react";
import { Button, Form, Input } from "reactstrap";

const TodoForm = ({ handleAddTask }) => {

    const [ userInput, setUserInput ] = useState("");

    const handleChangeTask = (e) => {
        setUserInput(e.currentTarget.value);
    }

    const handleSubmitTask = (e) => {
        e.preventDefault();
        handleAddTask(userInput);
        setUserInput("");
    }
    return (
        <Form onSubmit={handleSubmitTask} className="d-flex flex-row justify-content-between mb-3">
            <Input value={userInput} type="text" onChange={handleChangeTask} placeholder="Please enter a new task"/>
            <Button color="primary" className="ml-3">Add</Button>
        </Form>
    );
};

export default TodoForm;
