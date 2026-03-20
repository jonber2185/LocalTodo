import styles from './TodoList.module.css';
import { useState } from "react";
import type Todo from "../types/Todo";
import formatDate from '../utils/formatDate';


export default function TodoList({ currentDate, todos, setTodos }: {
  currentDate: Date;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}) {
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, completed: false, date: selectedDateStr }]);
    setInput('');
  };

  const selectedDateStr = formatDate(currentDate);
  const currentTodos = todos.filter(t => t.date === selectedDateStr);

  return (
    <div className={styles.rightSection}>
      <div className={styles.dateDisplay}>{selectedDateStr}</div>
      <div className={styles.inputSection}>
        <input
          className={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
          placeholder="무엇을 할까요?"
        />
        <button className={styles.addButton} onClick={addTodo}>+</button>
      </div>

      <div className={styles.todoListScroll}>
        {currentTodos.map(todo => (
          <div key={todo.id} className={styles.todoItem}>
            <span
              className={`${styles.todoText} ${todo.completed ? styles.completedText : ''}`}
              onClick={() => setTodos(todos.map(t => t.id === todo.id ? { ...t, completed: !t.completed } : t))}
            >
              {todo.text}
            </span>
            <button
              className={styles.deleteButton}
              onClick={() => setTodos(todos.filter(t => t.id !== todo.id))}
            >
              삭제
            </button>
          </div>
        ))}
        {currentTodos.length === 0 && <p style={{ color: '#aaa', textAlign: 'center', marginTop: '20px' }}>일정이 없어요!</p>}
      </div>
    </div>
  );
}