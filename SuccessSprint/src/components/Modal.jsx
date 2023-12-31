import { useState } from 'react';
import Modal from 'react-modal';
import { IoClose } from "react-icons/io5";
import {useDispatch} from 'react-redux'
import { ADD_TODO } from './redux/actionTypes';

const customStyles = {
    content: {
        width: '20%',
        height: '20%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('root'));

function NewModal() {
    // let subtitle;

    const [modalIsOpen, setIsOpen] = useState(false);

    const [task, setTask] = useState('');

    const [todos,setTodos] = useState([]);

    const dispatch = useDispatch();

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        todos.push(task)
        dispatch({
            type:ADD_TODO,
            payload:todos
        })
        setTask('')
    }

    return (


        <div className="flex items-end justify-end py-2 px-4 font-handwritten">
            <button onClick={openModal} >
                <span className="text-secondary text-8xl">+</span>
            </button>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button className='float-right' onClick={closeModal}><IoClose /></button>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-5 items-center justify-center'>
                        <input placeholder='Enter New Task...' value={task} className='border-2 border-primary rounded-md pl-2' onChange={(e) => setTask(e.target.value)} />
                        <button type='submit' className='bg-primary text-secondary rounded-md h-7 w-14 px-2 m-auto'>Add</button>
                    </div>
                </form>
            </Modal>
        </div >
    );
}

export default NewModal