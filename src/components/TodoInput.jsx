import React from 'react'

const TodoInput = ({todo, handleChange, handleAdd}) => {
  return (
    <section className='flex flex-col items-center'>
        <div className='flex flex-col md:flex-row items-center justify-center w-5/6 md:w-1/2 gap-2'>
            <input className='w-full p-2 outline-none border-b border-slate-300 rounded-md' placeholder={'Add Todo'} value={todo} onChange={(e) => handleChange(e)}/>
            <button className='bg-lime-500 hover:bg-lime-400 text-white w-full md:w-auto px-5 py-2 rounded-md' onClick={handleAdd}>Add</button>
        </div>
    </section>
  )
}

export default TodoInput