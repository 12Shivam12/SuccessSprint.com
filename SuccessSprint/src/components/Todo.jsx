

const Todo = () => {

   const handleSubmit = () =>{
    console.log("button triggered");
   }

    return (
        <div className="font-bold text-2xl text-white bg-primary w-1/3 h-full border rounded-lg flex flex-col py-2">
            <div className="h-[35px] w-3/5 bg-secondary m-auto my-2 border rounded-l-3xl rounded-r-3xl  flex items-center justify-around  ">
                <div className="h-[10px] w-[10px] rounded-full border-2 border-primary bg-secondary"></div>
                <h2 className="text-primary ">Todos</h2>
                <div className="h-[10px] w-[10px] rounded-full border-2 border-primary bg-secondary"></div>
            </div>
            <div className="flex-grow">
                {/* Add Todos here */}
            </div>
            <div className="flex items-end justify-end py-2 px-4">
                <button onClick={handleSubmit}>
                    <span className="text-secondary text-8xl">+</span>
                </button>
            </div>
        </div>

    )
}

export default Todo