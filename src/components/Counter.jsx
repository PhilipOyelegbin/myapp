import React, {useState, useEffect} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        let newCount = count + 1
        setCount(newCount)
    };
    
    const handleDecrease = () => {
        let newCount = count - 1
        setCount(newCount)
    };

    const handleReset = () => {
        setCount(0)
    };

    const title = count > 0 || count < 0 ? document.title = "Counter App" : document.title = "Todo App";
    useEffect(() => {
      title
    }, [count])
    

  return (
    <section className='flex flex-col items-center gap-2 py-5'>
        <h2 className='text-center text-xl md:text-2xl font-bold'>{title}</h2>
        <p>{count}</p>
        <div className='flex gap-1'>
            <button className='bg-green-500 hover:bg-green-400 text-white rounded-md px-3 py-1' onClick={handleIncrease}>Increase</button>
            <button className='bg-red-500 hover:bg-red-400 text-white rounded-md px-3 py-1' onClick={handleDecrease}>Decrease</button>
            <button className='bg-gray-500 hover:bg-gray-400 text-white rounded-md px-3 py-1' onClick={handleReset}>Reset</button>
        </div>
    </section>
  )
}

export default Counter