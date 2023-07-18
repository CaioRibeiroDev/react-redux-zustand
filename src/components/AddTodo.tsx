import { FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { add } from "../store"

export function AddTodo() {
  const [newTodo, setNewTodo] = useState('')
  const dispatch = useDispatch()

  function handleAddTodo(event: FormEvent) {
    event.preventDefault()

    dispatch(add({newTodo}))
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input type="text" 
          placeholder="Adicionar to-do" 
          value={newTodo} 
          onChange={e => setNewTodo(e.target.value)}
        />
        <button type={"submit"}>Adicionar</button>
      </form>
    </div>
  )
}