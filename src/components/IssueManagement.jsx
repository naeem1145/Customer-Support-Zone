import React, { use, useState } from "react";
import CountBox from './CountBox';
import IssueCard from './IssueCard';
import Container from '../Container';
import TaskStatusCard from './TaskStatusCard'; 


const IssueManagement = ({ fetchPromise }) => {
    const initialData = use(fetchPromise)
    const [mainData, setMainData] = useState(initialData)
  
    const [selectData, setSelectData] = useState([]);
 
    const [removeData, setRemoveData] = useState([])


    const taskCompleted = (taskD) => {
        const remove = selectData.filter(fT => fT.id !== taskD.id);
        const findRemoveOne = mainData.find(res => res.id === taskD.id)
        setSelectData(remove)
        setRemoveData([...removeData, findRemoveOne])
    
        const updatedMain = mainData.filter(res => res.id !== taskD.id);
        setMainData(updatedMain);



    }



    return (
        <div>
            {/* Count box  */}
            <CountBox selectData={selectData} removeData={removeData} />

            {/* issue card container  */}
            <Container>
                <div className='my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    <div className='md:col-span-2 lg:col-span-3'>

                        <h1 className="text-2xl font-bold my-3">Customer Tickets</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-5 ">
                            {/* Card  */}
                            {
                                mainData.map((issueData, i) => <IssueCard
                                    key={i}
                                    issueData={issueData}
                                    mainData={mainData}
                                    selectData={selectData}
                                    setSelectData={setSelectData}
                                />)
                            }
                        </div>
                    </div>

                    {/* management card container  */}
                    <div className='md:col-span-2 lg:col-span-1'>
                        <div>
                            <h1 className="text-xl font-bold my-3">Task Status</h1>
                            {/* task status card  */}
                            {
                                selectData.length === 0 ? (
                                    <div className="text-xl text-gray-400">No selected tasks yet.</div>
                                ) : (
                                    selectData.map(task => (
                                        <TaskStatusCard
                                            key={task.id}
                                            task={task}
                                            taskCompleted={taskCompleted}
                                        />
                                    ))
                                )
                            }

                        </div>

                        <div>
                            <h1 className="text-xl font-bold my-3">Resolved Task</h1>
                            {/* Resolved Task card  */}

                            {
                                removeData.length === 0 ? (
                                    <div className='text-xl text-gray-400'>No resolved tasks yet.</div>
                                ) : (
                                    removeData.map(res => (
                                        <div key={res.id} className='mb-5 font-bold p-4 bg-blue-100 rounded-lg w-[100%] h-[100%] shadow '>
                                            <h2>{res.title}</h2>
                                        </div>
                                    ))
                                )
                            }




                        </div>


                    </div>



                </div>
            </Container>

        </div>
    );
};

export default IssueManagement;