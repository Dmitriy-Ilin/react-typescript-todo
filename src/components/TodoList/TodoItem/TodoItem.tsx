import React from 'react'
import { Todo } from '../../../type'
import styles from '../TodoItem/TodoItem.module.css'
import Button from '../../Button/Button';

interface TodoItemProps {
    todo: Todo;
    checkTodo: (id: Todo['id']) => void;
    deleteTodo: (id: Todo['id']) => void;
    selectTodo: (id: Todo['id']) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({todo, checkTodo, deleteTodo, selectTodo}) => {
  return (
    <div className={styles.todoItemContainer}>
        <div>
            <div 
                aria-hidden 
                style={{
                    opacity: todo.checked ? 0.5 : 1,
                    textDecoration: todo.checked ? 'line-through' : 'none'
                }} 
                onClick={() => checkTodo(todo.id)}
                className={styles.todoItemTitle}>
                {todo.name}
            </div>
            <div aria-hidden className={styles.todoItemDescription}>
                {todo.description}
            </div>
        </div>
        <div className={styles.todoItemButtonContainer}>
            <Button color='orange' onClick={() => selectTodo(todo.id)}>
                Edit
            </Button>
            <Button color='red' onClick={() => deleteTodo(todo.id)}>
                Delete
            </Button>
        </div>
    </div>
  )
}

export default TodoItem