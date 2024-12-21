export function TodoItem({ id, title, description, completed, toggleTodo, deleteTodo}){
    return(
        <li>
            <span>Title : {title}</span>
            <p>{description}</p>
            <div className="text-right action-container">
            <input type="checkbox" name="checkbox"  checked = {completed} onChange={e => toggleTodo(id,e.target.checked)}/>
            <button className='edit' onClick={() => editTodo(id, title, description)}>Edit</button>
            <button className='delete' onClick={()=> deleteTodo(id)}>Delete</button>
            </div>
        </li>
    )
}