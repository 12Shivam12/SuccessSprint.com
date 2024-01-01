import { useDispatch, useSelector } from "react-redux";
import NewModal from "./Modal";
import { RiDeleteBin5Fill } from "react-icons/ri";
import {  DELETE_TODO_FROM_TODO,  } from "./redux/actionTypes";

const Todo = () => {
    const dispatch = useDispatch();
    const todo = useSelector((storeData) => storeData.todo);

    const handleDelete = (index) => {
        dispatch({
            type: DELETE_TODO_FROM_TODO,
            payload: index,
        });
    };

    const handleDragStart = (e, task, index) => {
        e.dataTransfer.setData("text/plain", JSON.stringify({ task, index }));
    };

    

    return (
        <div
            onDragOver={(e) => e.preventDefault()}
            className="font-bold text-2xl text-white bg-primary w-1/3 h-full border rounded-lg flex flex-col py-2 font-handwritten"
        >
            <div className="h-[35px] w-3/5 bg-secondary m-auto my-2 border rounded-l-3xl rounded-r-3xl  flex items-center justify-around mb-8 ">
                <div className="h-[10px] w-[10px] rounded-full border-2 border-primary bg-secondary"></div>
                <h2 className="text-primary ">Todos</h2>
                <div className="h-[10px] w-[10px] rounded-full border-2 border-primary bg-secondary"></div>
            </div>
            <div className="flex-grow">
                {/* Add Todos here */}
                {todo?.map((task, index) => (
                    <div
                        key={index}
                        draggable
                        onDragStart={(e) => handleDragStart(e, task, index)}
                        className=" cursor-grab border border-secondary  h-auto w-4/5 rounded-md mb-5 m-auto flex justify-between items-center text-md px-2"
                    >
                        <>
                            <p className="text-secondary font-thin text-md ml-2">{task}</p>
                            <div className="flex gap-4">
                                <button>
                                    <RiDeleteBin5Fill
                                        className="text-secondary"
                                        onClick={() => handleDelete(index)}
                                    />
                                </button>
                            </div>
                        </>
                    </div>
                ))}
            </div>
            <NewModal />
        </div>
    );
};

export default Todo;

