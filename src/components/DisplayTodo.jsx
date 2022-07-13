import React from 'react'

const DisplayTodo = ({item, handleEdit, handleDelete}) => {
  const {id} = item
  return (
    <ul className='list-disc px-5 mt-5'>
      <li>
        <p className='font-bold'>{item.todo}</p>
        <button className='bg-blue-500 hover:bg-blue-400 text-white text-sm px-3 py-1 rounded-md' onClick={() => handleEdit(id)}>Edit</button>
        <button className='bg-red-500 hover:bg-red-400 text-white text-sm px-3 py-1 rounded-md ml-1' onClick={() => handleDelete(id)}>Delete</button>
      </li>
    </ul>
  )
}

export default DisplayTodo