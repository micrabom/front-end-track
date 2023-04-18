import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import '../assets/css/task.css';

export const AddTask = () => {
    const [tasks, setTasks] = useState(null);
    const [newTask, setNewTask] = useState('');
    const [taskType, setTaskType] = useState('front-end');

    useEffect(() => {
        const tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks'));
        if (tasksFromLocalStorage) {
            setTasks(tasksFromLocalStorage);
        }
    }, []);

    useEffect(() => {
        const tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks'));
        if (tasksFromLocalStorage) {
            setTasks(tasksFromLocalStorage);
        }
    }, []);
    if (!tasks) {
        return null; // or render a loading spinner
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newTask.trim() === '') return;
        const task = {
            name: newTask.trim(),
            id: new Date().getTime(),
        };
        if (taskType === 'front-end') {
            setTasks({ ...tasks, fe: [...tasks.fe, task] });
        } else {
            setTasks({ ...tasks, be: [...tasks.be, task] });
        }
        setNewTask('');
        localStorage.setItem('tasks', JSON.stringify(tasks));
        console.log('New tasks object:', tasks);
    };


    const handleDelete = (taskId, taskType) => {
        if (taskType === 'front-end') {
            setTasks({ ...tasks, fe: tasks.fe.filter((task) => task.id !== taskId) });
        } else {
            setTasks({ ...tasks, be: tasks.be.filter((task) => task.id !== taskId) });
        }
        console.log('Updated tasks object:', tasks);

    };

    return (
        <>
            <div className="task-container">
                <Row className="justify-content-center">
                    <div className="title">
                        <h2>Task Logger</h2>
                        <p>temp data</p>
                    </div>
                    <div className="action-wrapper">
                        <form onSubmit={handleSubmit}>
                            <label id='title'>
                                Task Name:
                                <input type="text" placeholder="" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                            </label>
                            <br />
                            <label>
                                Task Type:
                                <div>
                                    <label>
                                        <input type="radio" name="type" value="front-end" checked={taskType === 'front-end'} onChange={(e) => setTaskType(e.target.value)} />
                                        Front-end
                                    </label>
                                    <label>
                                        <input type="radio" name="type" value="back-end" checked={taskType === 'back-end'} onChange={(e) => setTaskType(e.target.value)} />
                                        Back-end
                                    </label>
                                </div>
                            </label>
                            <label className='submit-btn'>
                                <input type="submit" value='Add' />
                            </label>
                        </form>
                    </div>
                    <div className="dashboard">
                        <div className="front-end-wrapper">
                            <h3>Front-end</h3>
                            {/* dashboard for front-end task */}
                            {tasks.fe.map((task) => (
                                <Row key={task.id} className='fe-task '>
                                    <div className="d-flex justify-content-between">
                                        <p>{task.name}</p>
                                        <i className="fas fa-trash-alt" onClick={() => handleDelete(task.id, 'front-end')}></i>
                                    </div>
                                </Row>
                            ))}
                        </div>
                        <div className="back-end-wrapper">
                            <h3>Back-end</h3>
                            {/* dashboard for back-end task */}
                            {tasks.be.map((task) => (
                                <Row key={task.id} className='be-task '>
                                    <div className="d-flex justify-content-between">
                                        <p>{task.name}</p>
                                        <i className="fas fa-trash-alt" onClick={() => handleDelete(task.id, 'back-end')}></i>
                                    </div>
                                </Row>
                            ))}
                        </div>
                    </div>
                </Row>
            </div>
        </>
    );
};
