import { useState } from "react";
import Done from "./components/Done";
import Progress from "./components/Progress";
import Todo from "./components/Todo";
import { CiDark } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { DARK_MODE } from "./components/redux/actionTypes";

export default function App() {

  const [darkmode, setDarkmode] = useState(true);

  const dispatch = useDispatch();

  const handleDarkMode = () => {
    setDarkmode(!darkmode);
    dispatch({
      type:DARK_MODE,
      payload:darkmode
    })
  }

  return (

    <div className="flex flex-col gap-3 sm:flex-row md:flex-row  w-4/5 h-[500px]  m-auto my-20 ">



      <Todo />
      <Progress />
      <Done />
      {/* <div
        onClick={handleDarkMode}
        className={`h-10 w-10 flex justify-center items-center rounded-md border transition-all duration-300 ease-in-out cursor-pointer ${darkmode ? 'bg-primary text-secondary' : 'bg-secondary text-primary'
          }`}
      >
        <button className="text-2xl fill-blue-500 ...">
          <CiDark />
        </button>
      </div> */}
    </div>
    // <NewModal/>
  )
}
