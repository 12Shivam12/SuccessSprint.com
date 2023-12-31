import { useDispatch, useSelector } from "react-redux"
import NewModal from "./Modal"
import { RiDeleteBin5Fill } from "react-icons/ri";
// import { CiEdit } from "react-icons/ci";
import { DELETE_TODO,  } from "./redux/actionTypes";
// import { useState } from "react";
// import { BiSave } from "react-icons/bi";
// import { MdOutlineCancel } from "react-icons/md";


const Todo = () => {

    const dispatch = useDispatch();

    // const [isEditing, setIsEditing] = useState(false)

    // const [editedIndex, setEditedIndex] = useState(null);

    // const [editedText, setEditedText] = useState("");

    const todo = useSelector((storeData) => { return storeData.todo })
    // const darkMode = useSelector((storeData) => { return storeData.darkMode })
    // console.log(darkMode)

    // const handleEdit = (index, text) => {
    //     setIsEditing(!isEditing)
    //     setEditedIndex(index);
    //     setEditedText(text);
    // }

    // const handleSaveEdit = () => {
    //     dispatch({
    //         type: EDIT_TODO,
    //         payload: { index: editedIndex, text: editedText },
    //     });
    //     setIsEditing(false);
    //     setEditedIndex(null);
    //     setEditedText("");
    // };

    // const handleCancelEdit = () => {
    //     setIsEditing(false);
    //     setEditedIndex(null);
    //     setEditedText("");
    // };

    const handleDelete = (index) => {
        dispatch({
            type: DELETE_TODO,
            payload: index
        })

    }

    return (
        <div className="font-bold text-2xl text-white bg-primary w-1/3 h-full border rounded-lg flex flex-col py-2 font-handwritten">
            <div className="h-[35px] w-3/5 bg-secondary m-auto my-2 border rounded-l-3xl rounded-r-3xl  flex items-center justify-around mb-8 ">
                <div className="h-[10px] w-[10px] rounded-full border-2 border-primary bg-secondary"></div>
                <h2 className="text-primary ">Todos</h2>
                <div className="h-[10px] w-[10px] rounded-full border-2 border-primary bg-secondary"></div>
            </div>
            <div className="flex-grow">
                {/* Add Todos here */}
                {
                    todo?.map((task, index) => (
                        <div key={index} className="border border-secondary  h-auto w-4/5 rounded-md mb-5 m-auto flex justify-between items-center text-md px-2">
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
            <NewModal />
        </div>

    )
}

export default Todo