import { useDispatch, useSelector } from "react-redux";
import {  DELETE_TODO_FROM_PROGRESS, DELETE_TODO_FROM_TODO, DROP_IN_PROGRESS } from "./redux/actionTypes";
import { RiDeleteBin5Fill } from "react-icons/ri";

const Progress = () => {
    const inProgressTasks = useSelector((storeData) => storeData.inProgress);

    const dispatch = useDispatch();

    const handleDelete = (index) => {
        dispatch({
            type: DELETE_TODO_FROM_PROGRESS,
            payload: index,
        });
    };

    const handleDragStart = (e, task, index) => {
        e.dataTransfer.setData("text/plain", JSON.stringify({ task, index }));
    };

    return (
        <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {  
                e.preventDefault();
                const droppedData = JSON.parse(e.dataTransfer.getData("text/plain"));
                dispatch({
                    type: DROP_IN_PROGRESS,
                    payload: droppedData,
                });
                // Remove the dropped item from the todo list
                dispatch({
                    type: DELETE_TODO_FROM_TODO,
                    payload: droppedData.index,
                });
            }}
            className="font-bold text-2xl text-white bg-primary w-1/3 h-full border rounded-lg flex flex-col py-2 font-handwritten"
        >
            <div className="h-[35px] w-3/5 bg-secondary m-auto my-2 border rounded-l-3xl rounded-r-3xl  flex items-center justify-around mb-8 ">
                <div className="h-[10px] w-[10px] rounded-full border-2 border-primary bg-secondary"></div>
                <h2 className="text-primary ">Progress</h2>
                <div className="h-[10px] w-[10px] rounded-full border-2 border-primary bg-secondary"></div>
            </div>
            <div>
                {/* Add Todos here */}

                {
                    inProgressTasks?.map((task, index) => (
                        <div draggable onDragStart={(e) => handleDragStart(e, task, index)} key={index} className=" cursor-grab border border-secondary  h-auto w-4/5 rounded-md mb-5 m-auto flex justify-between items-center text-md px-2">
                            <>
                                <p className="text-secondary font-thin text-md ml-2">{task}</p>
                                <div className="flex gap-4">
                                    {/* <button onClick={() => handleEdit(index, task)}> <CiEdit className="text-secondary" /></button> */}
                                    <button onClick={() => { handleDelete(index) }}> <RiDeleteBin5Fill className="text-secondary" /></button>
                                </div>
                            </>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}
export default Progress
