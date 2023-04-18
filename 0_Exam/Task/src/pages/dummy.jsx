import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import '../assets/css/dashboard.css';
import '../assets/css/subtask.css';
import '../assets/css/task.css';

export const AddTask = () => {
    const [tasks, setTasks] = useState(() => {
        return JSON.parse(localStorage.getItem('tasks') || '[]');
    });
    const [newTask, setNewTask] = useState('');
    const [taskType, setTaskType] = useState('sprint');
    const [sprintCompletedCount, setSprintCompletedCount] = useState(0);
    const [backlogCompletedCount, setBacklogCompletedCount] = useState(0);

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        } else {
            setTasks({ sp: [], bl: [] });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newTask.trim() === '') return;
        const task = {
            name: newTask.trim(),
            id: new Date().getTime(),
            subtasks: [],
        };
        if (taskType === 'sprint') {
            setTasks({ ...tasks, sp: [...tasks.sp, task] });
        } else {
            setTasks({ ...tasks, bl: [...tasks.bl, task] });
        }
        setNewTask('');
    };

    const updateTaskStatus = (id, type, status) => {
        const taskList = type === 'sprint' ? tasks.sp : tasks.bl;
        const taskIndex = taskList.findIndex((t) => t.id === id);
        const updatedTask = { ...taskList[taskIndex], status };
        const updatedTaskList = [
            ...taskList.slice(0, taskIndex),
            updatedTask,
            ...taskList.slice(taskIndex + 1),
        ];
        if (type === 'sprint') {
            setTasks({ ...tasks, sp: updatedTaskList });
            setSprintCompletedCount(sprintCompletedCount + (status === 'completed' ? 1 : -1));
        } else {
            setTasks({ ...tasks, bl: updatedTaskList });
            setBacklogCompletedCount(backlogCompletedCount + (status === 'completed' ? 1 : -1));
        }
    };

    const handlePending = (id, type) => {
        const taskList = type === 'sprint' ? tasks.sp : tasks.bl;
        const taskIndex = taskList.findIndex((t) => t.id === id);
        const updatedTask = { ...taskList[taskIndex], status: 'pending' };
        const updatedTaskList = [
            ...taskList.slice(0, taskIndex),
            updatedTask,
            ...taskList.slice(taskIndex + 1),
        ];
        if (type === 'sprint') {
            setTasks({ ...tasks, sp: updatedTaskList });
        } else {
            setTasks({ ...tasks, bl: updatedTaskList });
        }
    };

    const handleOngoing = (id, type) => {
        const taskList = type === 'sprint' ? tasks.sp : tasks.bl;
        const taskIndex = taskList.findIndex((t) => t.id === id);
        const updatedTask = { ...taskList[taskIndex], status: 'ongoing' };
        const updatedTaskList = [...taskList.slice(0, taskIndex), updatedTask, ...taskList.slice(taskIndex + 1),];
        if (type === 'sprint') {
            setTasks({ ...tasks, sp: updatedTaskList });
            setSprintCompletedCount(sprintCompletedCount - 1);
        } else {
            setTasks({ ...tasks, bl: updatedTaskList });
            setBacklogCompletedCount(backlogCompletedCount - 1);
        }
    };

    const handleCompleted = (id, type) => {
        const taskList = type === 'sprint' ? tasks.sp : tasks.bl;
        const taskIndex = taskList.findIndex((t) => t.id === id);
        const updatedTask = { ...taskList[taskIndex], status: 'completed' };
        const updatedTaskList = [...taskList.slice(0, taskIndex), updatedTask, ...taskList.slice(taskIndex + 1),];
        if (type === 'sprint') {
            setTasks({ ...tasks, sp: updatedTaskList });
            setSprintCompletedCount(sprintCompletedCount + 1);
        } else {
            setTasks({ ...tasks, bl: updatedTaskList });
            setBacklogCompletedCount(backlogCompletedCount + 1);
        }
    };

    const getCompletedPercentage = (tasksArray) => {
        const totalTasks = tasksArray.length;
        const completedTasks = tasksArray.filter((t) => t.status === 'completed').length;
        const ongoingTasks = tasksArray.filter((t) => t.status === 'ongoing').length;
        const totalCompleted = completedTasks + ongoingTasks / 2;
        if (totalTasks === 0) {
            return '0%';
        }
        return Math.round((totalCompleted / totalTasks) * 100) + '%';
    };

    const getSprintCompletedPercentage = () => {
        return getCompletedPercentage(tasks.sp);
    };

    const getBacklogCompletedPercentage = () => {
        return getCompletedPercentage(tasks.bl);
    };

    const handleDelete = (taskId, taskType) => {
        if (taskType === 'sprint') {
            setTasks({ ...tasks, sp: tasks.sp.filter((task) => task.id !== taskId) });
        } else {
            setTasks({ ...tasks, bl: tasks.bl.filter((task) => task.id !== taskId) });
        }
    };

    return (
        <>
            <div className="task-container">
                <Row className="justify-content-center">
                    <div className="title">
                        <h2>Task Logger</h2>
                    </div>
                    <div className="action-wrapper">
                        <form onSubmit={handleSubmit}>
                            <label id='title'>
                                Task Name:
                                <input type="text" placeholder="" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                            </label>
                            <br />
                            <label htmlFor="type">Task Designation:</label>
                            <select id="type" name="type" defaultValue="choosetype" value={taskType} onChange={(e) => setTaskType(e.target.value)}>
                                <option value="choosetype" disabled>Choose type</option>
                                <option value="sprint">Sprint</option>
                                <option value="backlog">Backlog</option>
                            </select>
                            <label className='submit-btn'>
                                <input type="submit" value='Add' />
                            </label>
                        </form>
                    </div>
                    <div className="dashboard">
                        <div className="sprint-wrapper">
                            <div className="sprint-title d-flex justify-content-between">
                                <h3>Sprint ({tasks.sp.length})</h3>
                                <h4>{getSprintCompletedPercentage()}</h4>
                            </div>
                            {/* dashboard for sprint task */}
                            <div className="sprint-tasks">
                                {tasks.sp.map((task) => (
                                    <Row key={task.id} className={`sp-task ${task.status}`}>
                                        <div className="d-flex justify-content-between">
                                            <p>{task.name}</p>
                                            <div className="d-flex ml-auto">
                                                <i className="far fa-clock" onClick={() => handlePending(task.id, 'sprint')}></i>
                                                <i className="fas fa-play" onClick={() => handleOngoing(task.id, 'sprint')}></i>
                                                <i className="fas fa-check-circle" onClick={() => handleCompleted(task.id, 'sprint')}></i>
                                                <i className="fas fa-trash-alt" onClick={() => handleDelete(task.id, 'sprint')}></i>
                                            </div>
                                        </div>
                                    </Row>
                                ))}
                            </div>
                            <div className="last-update">
                                <p>Last Update:</p>
                                {/* Add your last update here */}
                            </div>
                        </div>
                        <div className="backlog-wrapper">
                            <div className="backlog-title d-flex justify-content-between">
                                <h3>Backlog ({tasks.bl.length})</h3>
                                <h4>{getBacklogCompletedPercentage()}</h4>
                            </div>
                            <div className="backlog-tasks">
                                {/* dashboard for backlog task */}
                                {tasks.bl.map((task) => (
                                    <Row key={task.id} className={`bl-task ${task.status}`} >
                                        <div className="d-flex justify-content-between">
                                            <p>{task.name}</p>
                                            <div className="d-flex ml-auto">
                                                <i className="far fa-clock" onClick={() => handlePending(task.id, 'backlog')}></i>
                                                <i className="fas fa-play" onClick={() => handleOngoing(task.id, 'backlog')}></i>
                                                <i className="fas fa-check-circle" onClick={() => handleCompleted(task.id, 'backlog')}></i>
                                                <i className="fas fa-trash-alt" onClick={() => handleDelete(task.id, 'backlog')}></i>
                                            </div>
                                        </div>
                                    </Row>
                                ))}
                            </div>
                            <div className="last-update">
                                <p>Last Update:</p>
                                {/* Add your last update here */}
                            </div>
                        </div>
                    </div>
                </Row >
            </div >
        </>
    );
};
