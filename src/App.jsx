
import { useState } from 'react'
import './App.css'

function App() {

  const [todos, setTodos] = useState([]);
  const [newItem , setNewItem] = useState("");
  const [newDescription, setNewDescription] = useState("");

  function handleSubmit(e){
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title : newItem,
          description : newDescription,
          completed : false
        }
      ]
    });
    setNewItem("");
    setNewDescription("");
  }
  
  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return {...todo, completed}
        }
        return todo;
      });
    });
  }

  function deleteTodo(id){
    setTodos((currentTodos => {
      return currentTodos.filter(todo => todo.id !== id);
    }))
  }

  function editTodo(){

  }

  return (
    <>
      <h1>TODO LIST</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name='title' placeholder='Enter Title' value={newItem} onChange={(e) => setNewItem(e.target.value)} />
        <label htmlFor="description">Description</label>
        <textarea name="description" placeholder='Enter Description' value={newDescription} onChange={(e)=> setNewDescription(e.target.value)}></textarea>
        <button type='submit'>Submit</button>
      </form>
      <ul>
          { todos.length === 0 && 'NO TODOS' } 
          { 
            todos.map(todo => {
              return (
                <li key={todo.id}>
                  <span>Title : {todo.title}</span>
                  <p>{todo.description}</p>
                  <div className="text-right action-container">
                    <input type="checkbox" name="checkbox"  checked = {todo.completed} onChange={e => toggleTodo(todo.id,e.target.checked)}/>
                    <button className='edit' onClick={() => editTodo(todo.id, todo.title, todo.description)}>Edit</button>
                    <button className='delete' onClick={()=> deleteTodo(todo.id)}>Delete</button>
                  </div>
                </li>
              )
            })
          }
      </ul>

    </>
  )
}

export default App
