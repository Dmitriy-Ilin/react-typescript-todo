import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoPanel from './components/TodoPanel/TodoPanel';
import { Todo } from './type';
import TodoList from './components/TodoList/TodoList';
 
const todoList = [
  {id: 1, name: 'task1', description: 'descr1', checked: false},
  {id: 2, name: 'task2', description: 'descr2', checked: false},
  {id: 3, name: 'task3', description: 'descr3', checked: true},
];

function App() {
  const [todos, setTodos] = useState(todoList);
  const [todoEdit, setTodoEdit] = useState<Todo['id'] | null>(null);

  const selectTodo = (id: Todo['id']) => {
    setTodoEdit(id);
  };

  const addTodo = ({name, description}: Omit<Todo, 'checked' | 'id'>) => {
    setTodos([...todos, {id: todos[todos.length - 1].id + 1, description, name, checked: false}])
  };

  const checkTodo = (id: Todo['id']) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return {...todo, checked: !todo.checked}
      }
      return todo;
    }))
  };

  const deleteTodo = (id: Todo['id']) => {
    setTodos(todos.filter(todo => todo.id !== id))
  };

  const changeTodo = ({name, description}: Omit<Todo, 'checked' | 'id'>) => {
    setTodos(todos.map((todo) => {
      if (todo.id === todoEdit) {
        return {...todo, name, description};
      }
      return todo;
    }))
    setTodoEdit(null);
  };

  return (
    <div className="App">
      <div className='container'>
        <Header todoCount={todos.length}/>
        <TodoPanel mode='add' addTodo={addTodo}/>
        <TodoList 
          todos={todos} 
          checkTodo={checkTodo} 
          deleteTodo={deleteTodo} 
          selectTodo={selectTodo}
          todoEdit={todoEdit}
          changeTodo={changeTodo}
        />
      </div>
    </div>
  );
}

export default App;
