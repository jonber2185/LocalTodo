import { useState, useEffect } from 'react';
import styles from './App.module.css';
import TodoList from './components/TodoList';
import TodoCalendar from './components/TodoCalendar';
import type Todo from './types/Todo';

export default function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className={styles.container}>
      <TodoCalendar todos={todos} currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <TodoList currentDate={currentDate} todos={todos} setTodos={setTodos} />
    </div>
  );
}
