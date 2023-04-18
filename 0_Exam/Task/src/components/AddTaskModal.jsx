import React from 'react';

export const AddTaskModal = ({ onClose }) => {
    return (
        <div className="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add Task</h5>
                        <button type="button" className="close" onClick={onClose}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="taskName">Task Name</label>
                                <input type="text" className="form-control" id="taskName" />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Add
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
