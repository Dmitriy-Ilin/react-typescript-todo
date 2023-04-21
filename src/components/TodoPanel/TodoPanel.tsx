import React, {useState} from 'react'
import styles from '../TodoPanel/TodoPanel.module.css'
import Button from '../Button/Button';
import { Todo } from '../../type';

const defaultTodo = {
    name: '',
    description: ''
}

interface AddPanelProps {
    mode: 'add';
    addTodo: ({name, description}: Omit<Todo, 'checked' | 'id'>) => void;
}

interface EditPanelProps {
    mode: 'edit';
    editTodo: Omit<Todo, 'id' | 'checked'>;
    changeTodo: ({name, description}: Omit<Todo, 'checked' | 'id'>) => void;
}

type TodoPanelProps = AddPanelProps | EditPanelProps;

const TodoPanel: React.FC<TodoPanelProps> = (props) => {
  const isEdit = props.mode === 'edit';

  const [todo, setTodo] = useState(isEdit ? props.editTodo : defaultTodo);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setTodo({...todo, [name]: value});
  }

  const handleClick = () => {
    const todoItem = {name: todo.name, description: todo.description};
    if (isEdit) {
        return props.changeTodo(todoItem)
    }

    props.addTodo(todoItem);
    setTodo(defaultTodo)
  }

  return (
    <div className={styles.todoPanelContainer}>
        <div className={styles.fieldsContainer}>
            <div className={styles.fieldContainer}>
                <label htmlFor='name'>
                    <div>name</div>
                    <input type='text' id='name' name='name' value={todo.name} onChange={handleChange}/>
                </label>
            </div>
            <div className={styles.fieldContainer}>
                <label htmlFor='name'>
                    <div>description</div>
                    <input type='text' id='description' name='description' value={todo.description} onChange={handleChange}/>
                </label>
            </div>
        </div>
        <div className={styles.buttonContainer}>
            {!isEdit &&
                <Button color='blue' onClick={handleClick}>
                    Add
                </Button>
            }
            {isEdit && 
                <Button color='orange' onClick={handleClick}>
                    Edit
                </Button>
            } 
        </div>
    </div>
  )
}

export default TodoPanel