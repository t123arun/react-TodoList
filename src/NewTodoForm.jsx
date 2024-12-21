import { useState } from "react";

export function NewTodoForm({ onSubmit }){

    const [newItem , setNewItem] = useState("");
    const [newDescription, setNewDescription] = useState("");
    
    
    function handleSubmit(e){
        e.preventDefault();
        if(newItem === "") return
        if(newDescription === "") return

            onSubmit(newItem, newDescription)

            setNewItem("");
            setNewDescription("");
        }


    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" name='title' placeholder='Enter Title' value={newItem} onChange={(e) => setNewItem(e.target.value)} />
            <label htmlFor="description">Description</label>
            <textarea name="description" placeholder='Enter Description' value={newDescription} onChange={(e)=> setNewDescription(e.target.value)}></textarea>
            <button type='submit'>Submit</button>
        </form>
    )
}