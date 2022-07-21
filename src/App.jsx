import React, {useState} from 'react'
import Counter from './components/Counter';
import DisplayTodo from './components/DisplayTodo';
import Form from './components/Form';
import TodoInput from './components/TodoInput';

const App = () => {
  const [todo, setTodo] = useState('');
  const [todoData, setTodoData] = useState([]);

  const handleChange = (e) => {
    const todoName = e.target.value;
    setTodo(todoName);
  }

  const handleAdd = () => {
    const todoItem = {
      id: new Date().getMilliseconds(),
      todo,
    }
    !todo ? alert('Todo data cannot be empty!') : todo.includes("  ") ? alert("Todo data cannot be double space") : todo.length < 5 ? alert("Todo data too short!") :  setTodoData((prev) => [...prev,todoItem]) 
  }

  const handleDelete = (id) => {
    const todoItem = todoData.filter(item => item.id !== id)
    setTodoData(todoItem)
  };

  const handleEdit = (id) => {
    const findItem = todoData.filter(item => item.id !== id)
    const updateItem = prompt("Update Todo")
    const todoItem = {
      id, 
      todo: updateItem,
    }
    !todo ? alert('Todo data cannot be empty!') : todo.includes("  ") ? alert("Todo data cannot be double space") : todo.length < 5 ? alert("Todo data too short!") : setTodoData((prev) => [...prev, todoItem]) 
    console.log(todoItem);
  };

  const showTodo = todoData?.map((item, index) => <DisplayTodo item={item} key={index} handleEdit={handleEdit} handleDelete={handleDelete}/>)

  return (
    <>
      <Counter/>
      <Form/>
      <TodoInput todo={todo} handleChange={handleChange} handleAdd={handleAdd}/>
      {showTodo}
    </>
  )
}

export default App