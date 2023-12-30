import Done from "./components/Done";
import Progress from "./components/Progress";
import Todo from "./components/Todo";

export default function App() {
  return (
    
    <div className="flex flex-col gap-3 sm:flex-row md:flex-row  w-4/5 h-[500px]  m-auto my-20 ">
      <Todo/>
      <Progress/>
      <Done/>
    </div>
  )
}
