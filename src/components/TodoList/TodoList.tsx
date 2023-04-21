import React from 'react'
import { Todo } from '../../type'
import TodoItem from './TodoItem/TodoItem'
import TodoPanel from '../TodoPanel/TodoPanel';

interface TodoListProps {
    todos: Todo[];
    checkTodo: (id: Todo['id']) => void;
    deleteTodo: (id: Todo['id']) => void;
    selectTodo: (id: Todo['id']) => void;
    todoEdit: Todo['id'] | null;
    changeTodo: ({name, description}: Omit<Todo, 'checked' | 'id'>) => void;
}

const TodoList: React.FC<TodoListProps> = ({todos, checkTodo, deleteTodo, selectTodo, todoEdit, changeTodo}) => {
  return (
    <div>
        {todos.map(todo => {
          if(todo.id === todoEdit) {
            return <TodoPanel key={todo.id} mode='edit' changeTodo={changeTodo} editTodo={{name: todo.name, description: todo.description}}/>;
          } 
            return <TodoItem key={todo.id} todo={todo} checkTodo={checkTodo} deleteTodo={deleteTodo} selectTodo={selectTodo}/>
          
        }
        )}
    </div>
  )
}

export default TodoList