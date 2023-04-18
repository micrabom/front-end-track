import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import '../assets/css/task.css';

export const SubTask = ({ task, taskType, handleUpdateTasks }) => {
    const [newSubtask, setNewSubtask] = useState('');
    const [subtasks, setSubtasks] = useState([]);

    // Load subtasks from local storage when the component mounts
    useEffect(() => {
        const subtasksFromLocalStorage = JSON.parse(localStorage.getItem(`subtasks_${task.id}_${taskType}`));
        if (subtasksFromLocalStorage) {
            setSubtasks(subtasksFromLocalStorage);
        }
    }, [task.id, taskType]);

    const handleAddSubtask = (event) => {
        event.preventDefault();
        if (newSubtask.trim() === '') return;
        const subtask = {
            name: newSubtask.trim(),
            id: new Date().getTime(),
            status: 'pending',
        };
        setSubtasks([...subtasks, subtask]);
        setNewSubtask('');
        localStorage.setItem(`subtasks_${task.id}_${taskType}`, JSON.stringify([...subtasks, subtask]));
        handleUpdateTasks();
    };

    const handleDeleteSubtask = (subtaskId) => {
        setSubtasks(subtasks.filter((subtask) => subtask.id !== subtaskId));
        localStorage.setItem(`subtasks_${task.id}_${taskType}`, JSON.stringify(subtasks.filter((subtask) => subtask.id !== subtaskId)));
        handleUpdateTasks();
    };

    const handleUpdateSubtask = (subtaskId, newStatus) => {
        setSubtasks(
            subtasks.map((subtask) => {
                if (subtask.id === subtaskId) {
                    subtask.status = newStatus;
                }
                return subtask;
            })
        );
        localStorage.setItem(`subtasks_${task.id}_${taskType}`, JSON.stringify(subtasks));
        handleUpdateTasks();
    };

    return (
        <div>
            <div className="subtask-wrapper">
                <h3>{task.name}</h3>
                <form onSubmit={handleAddSubtask}>
                    <label id="title">
                        SubTask Name:
                        <input type="text" placeholder="" value={newSubtask} onChange={(e) => setNewSubtask(e.target.value)} />
                    </label>
                    <div className="submit-btn">
                        <input type="submit" value="Add" />
                    </div>
                </form>
                {subtasks.map((subtask) => (
                    <Row key={subtask.id} className={`subtask ${subtask.status}`}>
                        <div className="d-flex justify-content-between">
                            <p>{subtask.name}</p>
                            <div className="icons">
                                {subtask.status === 'pending' && <i className="fas pending-icon" onClick={() => handleUpdateSubtask(subtask.id, 'ongoing')}></i>}
                                {subtask.status === 'ongoing' && (
                                    <>
                                        <i className="fas pending-icon" onClick={() => handleUpdateSubtask(subtask.id, 'pending')}></i>
                                        <i className="fas check-icon" onClick={() => handleUpdateSubtask(subtask.id, 'completed')}></i>
                                    </>
                                )}
                                {subtask.status === 'completed' && <i className="fas check-icon"></i>}
                                <i className="fas fa-trash-alt" onClick={() => handleDeleteSubtask(subtask.id)}></i>
                            </div>
                        </div>
                    </Row>
                ))}
            </div>
        </div>
    )
}
