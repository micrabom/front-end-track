
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import '../assets/css/dashboard.css';
import '../assets/css/subtask.css';
import '../assets/css/task.css';

export const AddTask = () => {
    // const [tasks, setTasks] = useState({ sp: [], bl: [] });
    const [tasks, setTasks] = useState(() => {
        return JSON.parse(localStorage.getItem('tasks') || '[]');
    });
    const [lastSprintUpdate, setLastSprintUpdate] = useState(() => {
        const lastUpdate = localStorage.getItem('lastSprintUpdate');
        return lastUpdate ? new Date(lastUpdate) : null;
    });
    const [lastBacklogUpdate, setLastBacklogUpdate] = useState(() => {
        const lastUpdate = localStorage.getItem('lastBacklogUpdate');
        return lastUpdate ? new Date(lastUpdate) : null;
    });

    const [newTask, setNewTask] = useState('');
    const [taskType, setTaskType] = useState('sprint');
    const [sprintCompletedCount, setSprintCompletedCount] = useState(0);
    const [backlogCompletedCount, setBacklogCompletedCount] = useState(0);


    /* start useEffect */
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

    useEffect(() => {
        if (lastSprintUpdate) {
            localStorage.setItem('lastSprintUpdate', lastSprintUpdate.toLocaleString());
        }
    }, [lastSprintUpdate]);

    useEffect(() => {
        if (lastBacklogUpdate) {
            localStorage.setItem('lastBacklogUpdate', lastBacklogUpdate.toLocaleString());
        }
    }, [lastSprintUpdate]);
    /* End useEffect */


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
            setLastSprintUpdate(new Date());

        } else {
            setTasks({ ...tasks, bl: [...tasks.bl, task] });
            setLastBacklogUpdate(new Date());
        }
        setNewTask('');
    };

    const updateTaskStatus = (id, type, status) => {
        const taskList = type === 'sprint' ? tasks.sp : tasks.bl;
        const taskIndex = taskList.findIndex((t) => t.id === id);
        const updatedTask = { ...taskList[taskIndex], status };
        const updatedTaskList = [...taskList.slice(0, taskIndex), updatedTask, ...taskList.slice(taskIndex + 1)];

        if (type === 'sprint') {
            setTasks({ ...tasks, sp: updatedTaskList });
            if (status === 'completed') {
                setSprintCompletedCount(sprintCompletedCount + 1);
            } else if (status === 'ongoing') {
                setSprintCompletedCount(sprintCompletedCount - 1);
            }
            setLastSprintUpdate(new Date());
        } else {
            setTasks({ ...tasks, bl: updatedTaskList });
            if (status === 'completed') {
                setBacklogCompletedCount(backlogCompletedCount + 1);
            } else if (status === 'ongoing') {
                setBacklogCompletedCount(backlogCompletedCount - 1);
            }
            setLastBacklogUpdate(new Date());
        }
    };

    const handlePending = (id, type) => {
        updateTaskStatus(id, type, 'pending');
    };

    const handleOngoing = (id, type) => {
        updateTaskStatus(id, type, 'ongoing');
    };

    const handleCompleted = (id, type) => {
        updateTaskStatus(id, type, 'completed');
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
            setLastSprintUpdate(new Date());

        } else {
            setTasks({ ...tasks, bl: tasks.bl.filter((task) => task.id !== taskId) });
            setLastBacklogUpdate(new Date());
        }
    };

    const handleReset = () => {
        localStorage.clear();
        setTasks({ sp: [], bl: [] });
        setLastSprintUpdate(null);
        setLastBacklogUpdate(null);
        setSprintCompletedCount(0);
        setBacklogCompletedCount(0);
    };

    return (
        <>
            <button onClick={handleReset}>Reset</button>
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
                                <div>Last sprint update: {lastSprintUpdate ? lastSprintUpdate.toLocaleString() : '-'}</div>
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
                                <div>Last sprint update: {lastBacklogUpdate ? lastBacklogUpdate.toLocaleString() : '-'}</div>

                            </div>

                        </div>
                    </div>
                </Row >
            </div >
        </>
    );
};
