import React from 'react';
import { toast } from 'react-toastify';

const TaskStatusCard = ({task,taskCompleted}) => {

const handelRemove=()=>{
    taskCompleted(task);
    toast.success("Completed!!")
}

    return (
        <div>
            <div className='font-bold p-4 bg-white rounded-lg w-[100%] shadow mb-5 '>
                <h2>{task.title}</h2>
                <div className="mt-6">
                    <button onClick={handelRemove} className="btn btn-primary bg-green-700 outline-0 border-0 shadow-none btn-block">Complete</button>
                </div>
            </div>
        </div>
    );
};

export default TaskStatusCard;